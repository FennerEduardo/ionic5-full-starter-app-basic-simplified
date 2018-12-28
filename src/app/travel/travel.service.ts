import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SubjectFetch } from '../utils/subject-fetch';

import { TravelListingModel } from './listing/travel-listing.model';
import { TravelDetailsModel } from './details/travel-details.model';

@Injectable()
export class TravelService {
  private _listingCache: SubjectFetch<TravelListingModel>;
  private _detailsCache: SubjectFetch<TravelDetailsModel>;

  constructor(private http: HttpClient) { }

  public list(): Observable<TravelListingModel> {
    // Use cache if we have it.
    if (!this._listingCache) {
      // Initialize the model specifying that it is a shell model
      const listingShell: TravelListingModel = new TravelListingModel(true);
      this._listingCache = new SubjectFetch(
        listingShell,
        () => this.http.get<TravelListingModel>('./assets/sample-data/travel/listing.json')
      );
    }

    return this._listingCache.observable;
  }

  public details(): Observable<TravelDetailsModel> {
    // Use cache if we have it.
    if (!this._detailsCache) {
      // Initialize the model specifying that it is a shell model
      const detailsShell: TravelDetailsModel = new TravelDetailsModel(true);
      this._detailsCache = new SubjectFetch(
        detailsShell,
        () => this.http.get<TravelDetailsModel>('./assets/sample-data/travel/details.json')
      );
    }

    return this._detailsCache.observable;
  }
}
