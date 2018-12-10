import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SubjectFetch } from '../utils/subject-fetch';

import { RealStateListingModel } from './listing/real-state-listing.model';
import { RealStateDetailsModel } from './details/real-state-details.model';

@Injectable()
export class RealStateService {
  private _listingCache: SubjectFetch<RealStateListingModel>;
  private _detailsCache: SubjectFetch<RealStateDetailsModel>;

  constructor(private http: HttpClient) { }

  public list(): Observable<RealStateListingModel> {
    // Use cache if we have it.
    if (!this._listingCache) {
      // Initialize the model specifying that it is a shell model
      const listingShell: RealStateListingModel = new RealStateListingModel(true);
      this._listingCache = new SubjectFetch(
        listingShell,
        () => this.http.get<RealStateListingModel>('./assets/sample-data/real-state/listing.json')
      );
    }

    return this._listingCache.observable;
  }

  public details(): Observable<RealStateDetailsModel> {
    // Use cache if we have it.
    if (!this._detailsCache) {
      // Initialize the model specifying that it is a shell model
      const detailsShell: RealStateDetailsModel = new RealStateDetailsModel(true);
      this._detailsCache = new SubjectFetch(
        detailsShell,
        () => this.http.get<RealStateDetailsModel>('./assets/sample-data/real-state/details.json')
      );
    }

    return this._detailsCache.observable;
  }
}
