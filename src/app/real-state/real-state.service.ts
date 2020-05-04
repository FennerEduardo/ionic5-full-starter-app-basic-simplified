import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataStore } from '../shell/data-store';
import { RealStateListingModel } from './listing/real-state-listing.model';
import { RealStateDetailsModel } from './details/real-state-details.model';

@Injectable()
export class RealStateService {
  private listingDataStore: DataStore<RealStateListingModel>;
  private detailsDataStore: DataStore<RealStateDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<RealStateListingModel> {
    return this.http.get<RealStateListingModel>('./assets/sample-data/real-state/listing.json')
    .pipe(
      map(
        (data: RealStateListingModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const listing = new RealStateListingModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(listing, data);

          return listing;
        }
      )
    );
  }

  public getListingStore(dataSource: Observable<RealStateListingModel>): DataStore<RealStateListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: RealStateListingModel = new RealStateListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(): Observable<RealStateDetailsModel> {
    return this.http.get<RealStateDetailsModel>('./assets/sample-data/real-state/details.json')
    .pipe(
      map(
        (data: RealStateDetailsModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const details = new RealStateDetailsModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(details, data);

          return details;
        }
      )
    );
  }

  public getDetailsStore(dataSource: Observable<RealStateDetailsModel>): DataStore<RealStateDetailsModel> {
    // Use cache if available
    if (!this.detailsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: RealStateDetailsModel = new RealStateDetailsModel();
      this.detailsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.detailsDataStore.load(dataSource);
    }
    return this.detailsDataStore;
  }
}
