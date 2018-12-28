import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SubjectFetch } from '../utils/subject-fetch';

import { FoodListingModel } from './listing/food-listing.model';
import { FoodDetailsModel } from './details/food-details.model';

@Injectable()
export class FoodService {
  private _listingCache: SubjectFetch<FoodListingModel>;
  private _detailsCache: SubjectFetch<FoodDetailsModel>;

  constructor(private http: HttpClient) { }

  public list(): Observable<FoodListingModel> {
    // Use cache if we have it.
    if (!this._listingCache) {
      // Initialize the model specifying that it is a shell model
      const listingShell: FoodListingModel = new FoodListingModel(true);
      this._listingCache = new SubjectFetch(
        listingShell,
        () => this.http.get<FoodListingModel>('./assets/sample-data/food/listing.json')
      );
    }

    return this._listingCache.observable;
  }

  public details(): Observable<FoodDetailsModel> {
    // Use cache if we have it.
    if (!this._detailsCache) {
      // Initialize the model specifying that it is a shell model
      const detailsShell: FoodDetailsModel = new FoodDetailsModel(true);
      this._detailsCache = new SubjectFetch(
        detailsShell,
        () => this.http.get<FoodDetailsModel>('./assets/sample-data/food/details.json')
      );
    }

    return this._detailsCache.observable;
  }
}
