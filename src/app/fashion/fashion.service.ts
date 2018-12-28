import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SubjectFetch } from '../utils/subject-fetch';

import { FashionListingModel } from './listing/fashion-listing.model';
import { FashionDetailsModel } from './details/fashion-details.model';

@Injectable()
export class FashionService {
  private _listingCache: SubjectFetch<FashionListingModel>;
  private _detailsCache: SubjectFetch<FashionDetailsModel>;

  constructor(private http: HttpClient) { }

  public list(): Observable<FashionListingModel> {
    // Use cache if we have it.
    if (!this._listingCache) {
      // Initialize the model specifying that it is a shell model
      const listingShell: FashionListingModel = new FashionListingModel(true);
      this._listingCache = new SubjectFetch(
        listingShell,
        () => this.http.get<FashionListingModel>('./assets/sample-data/fashion/listing.json')
      );
    }

    return this._listingCache.observable;
  }

  public details(): Observable<FashionDetailsModel> {
    // Use cache if we have it.
    if (!this._detailsCache) {
      // Initialize the model specifying that it is a shell model
      const detailsShell: FashionDetailsModel = new FashionDetailsModel(true);
      this._detailsCache = new SubjectFetch(
        detailsShell,
        () => this.http.get<FashionDetailsModel>('./assets/sample-data/fashion/details.json')
      );
    }

    return this._detailsCache.observable;
  }
}
