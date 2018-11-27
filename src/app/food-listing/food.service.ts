import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SubjectFetch } from '../utils/subject-fetch';

import { FoodListingModel } from './food-listing.model';

@Injectable()
export class FoodService {
  private _documentsCache: SubjectFetch<FoodListingModel>;

  constructor(private http: HttpClient) { }

  public list(): Observable<FoodListingModel> {
    // Use cache if we have it.
    if (!this._documentsCache) {
      const listingShell: FoodListingModel = new FoodListingModel();
      this._documentsCache = new SubjectFetch(
        listingShell,
        () => this.http.get<FoodListingModel>('./assets/sample-data/food-listing.json')
      );
    }

    return this._documentsCache.observable;
  }
}
