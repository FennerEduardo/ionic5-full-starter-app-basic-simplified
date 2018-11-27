import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SubjectFetch } from '../utils/subject-fetch';

import { DealsListingModel } from './deals-listing.model';

@Injectable()
export class DealsService {
  private _documentsCache: SubjectFetch<DealsListingModel>;

  constructor(private http: HttpClient) { }

  public list(): Observable<DealsListingModel> {
    // Use cache if we have it.
    if (!this._documentsCache) {
      const listingShell: DealsListingModel = new DealsListingModel();
      this._documentsCache = new SubjectFetch(
        listingShell,
        () => this.http.get<DealsListingModel>('./assets/sample-data/deals-listing.json')
      );
    }

    return this._documentsCache.observable;
  }
}
