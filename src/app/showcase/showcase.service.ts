import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SubjectFetch } from '../utils/subject-fetch';

// import { TravelListingModel } from './listing/travel-listing.model';

@Injectable()
export class ShowcaseService {
  // private _detailsCache: SubjectFetch<TravelDetailsModel>;
  private _detailsCache: SubjectFetch<any>;

  constructor(private http: HttpClient) { }

  // public details(): Observable<TravelListingModel> {
  public shellDetails(): Observable<any> {
    // Use cache if we have it.
    if (!this._detailsCache) {
      // Initialize the model specifying that it is a shell model
      // const detailsShell: TravelListingModel = new TravelListingModel(true);
      const detailsShell: { title: string } = { title: null };
      this._detailsCache = new SubjectFetch(
        detailsShell,
        // () => this.http.get<TravelListingModel>('./assets/sample-data/travel/details.json')
        () => this.http.get<{ title: string }>('./assets/sample-data/showcase/shell.json')
      );
    }

    return this._detailsCache.observable;
  }
}
