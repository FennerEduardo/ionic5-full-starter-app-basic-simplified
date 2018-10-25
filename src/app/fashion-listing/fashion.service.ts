// Inspired on: https://github.com/angular/angular/issues/10556#issuecomment-367808691

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, ReplaySubject } from 'rxjs';
import { first, delay } from 'rxjs/operators';

import { ListingModel } from './listing.model';

// Cache for hot observable that allows stream to be cached and pushed.
export class SubjectFetch<T> {
  private _subject: ReplaySubject<T>;
  private _observable: Observable<T>;
  // private _fetch: () => Observable<any>;

  constructor(model: T, fetchData: () => Observable<T>) {
    this._subject = new ReplaySubject<T>();
    this._observable = this._subject.asObservable();

    // Send the mock
    this._subject.next(model);
    // Immediately after fetch data from endpoint
    fetchData().pipe(
      delay(10000),
      // Prevent the need to unsubscribe.
      // Q: Agustin: Is this because .first() completes the observable?
      first()
    ).subscribe((value: T) => {
      this._subject.next(value);
    });
  }

  // public fetch(aggregate: boolean = true): void {
  //   this._fetch().pipe(
  //     // Prevent the need to unsubscribe.
  //     // Q: Agustin: Is this because .first() completes the observable?
  //     first()
  //   ).subscribe(value => this._subject.next(value));
  // }

  public get observable(): Observable<T> {
    return this._observable;
  }
}

@Injectable()
export class FashionService {
  private _documentsCache: SubjectFetch<ListingModel>;

  constructor(private http: HttpClient) { }

  public list(): Observable<ListingModel> {
    // Use cache if we have it.
    if (!this._documentsCache) {
      // this._documentsCache = new SubjectFetch(() => this.http.get('http://somedomain.com/api/documents'));
      // this._documentsCache = new SubjectFetch(listingShell, 'http://somedomain.com/api/documents');
      const listingShell: ListingModel = new ListingModel();
      this._documentsCache = new SubjectFetch(listingShell, () => this.http.get<ListingModel>('./assets/sample_data/listing.json'));
    }

    return this._documentsCache.observable;
  }

  // public create(document: any): Observable<any> {
  //   const result = this.http.post<IDocument>(
  //       `http://somedomain.com/api/documents`, document);
  //
  //   // Fetch documents list again and publish back through hot observable.
  //   result
  //       .first()   // Prevent the need to unsubscribe.
  //       .subscribe(() => this._documentsCache.fetch());
  //
  //   return result;
  // }
}
