import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { flatMap} from 'rxjs/operators';

import { ShellProvider } from '../utils/shell-provider';

import { FoodListingModel } from './listing/food-listing.model';
import { FoodDetailsModel } from './details/food-details.model';

@Injectable()
export class FoodService {
  private _listingWithShellCache: ShellProvider<FoodListingModel>;

  constructor(private http: HttpClient) { }

  public getListingDataWithShell(): Observable<FoodListingModel> {
    // Use cache if we have it.
    if (!this._listingWithShellCache) {
      // Initialize the model specifying that it is a shell model
      const shellModel: FoodListingModel = new FoodListingModel(true);
      const dataObservable = this.http.get<FoodListingModel>('./assets/sample-data/food/listing.json');

      this._listingWithShellCache = new ShellProvider(
        shellModel,
        dataObservable
      );
    }
    return this._listingWithShellCache.observable;
  }

  public getDetailsDataWithShell(slug: string): Observable<FoodDetailsModel> {

    // Initialize the model specifying that it is a shell model
    const shellModel: FoodDetailsModel = new FoodDetailsModel(true);
    const dataObservable = this.http.get<{items: Array<FoodDetailsModel>}>('./assets/sample-data/food/details.json').pipe(
      flatMap(details => details.items.filter(item => item.slug === slug))
    );

    const detailsWithShell = new ShellProvider(
      shellModel,
      dataObservable
    );

    return detailsWithShell.observable;
  }
}
