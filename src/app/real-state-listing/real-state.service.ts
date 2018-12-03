import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SubjectFetch } from '../utils/subject-fetch';

import { RealStateListingModel } from './real-state-listing.model';

@Injectable()
export class RealStateService {
  private _documentsCache: SubjectFetch<RealStateListingModel>;

  constructor(private http: HttpClient) { }

  public list(): Observable<RealStateListingModel> {
    // Use cache if we have it.
    if (!this._documentsCache) {
      // Initialize the model specifying that it is a shell model
      const listingShell: RealStateListingModel = new RealStateListingModel(true);
      this._documentsCache = new SubjectFetch(
        listingShell,
        () => this.http.get<RealStateListingModel>('./assets/sample-data/real-state-listing.json')
      );
    }

    return this._documentsCache.observable;
  }
}
