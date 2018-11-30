import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import * as dayjs from 'dayjs';

import { SubjectFetch } from '../utils/subject-fetch';

import { DealsItemModel, DealsListingModel } from './deals-listing.model';

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
        // Simple approach: get data from json
        // () => this.http.get<DealsListingModel>('./assets/sample-data/deals-listing.json')

        // Alternate approach: I opted to create this model here so I can always show fresh dates (relative to now, not hardcoded ones)
        () => {
          const dealsListingModel = {
            items: [
              {
                code: 'CHOC4LIFE',
                description: 'Lindt Excellence 70% Cocoa Chocolate Diamonds 60ct Box with Lancaster for $10.26',
                name: '50% OFF Lindt',
                // Relative date (better to showcase UI micro-interactions)
                expirationDate: dayjs().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss') as string,
                // Instead of hardcoded one
                // expirationDate: '12/01/2018',
                logo: './assets/sample-images/deals/Deals1-4.1.png'
              } as DealsItemModel,
              {
                code: '20LIGHT25',
                description: '20% off Landscape Lighting and 25% off Outdoor Wall Light Fixtures with Coupon Code',
                name: '20% OFF Landscape Lighting',
                expirationDate: dayjs().add(7, 'day').format('MM/DD/YYYY') as string,
                logo: './assets/sample-images/deals/Deals2-4.1.png'
              } as DealsItemModel,
              {
                code: 'MORETVPLZ3',
                description: 'Starz HD free trial extended for 3 months, in time for the new seasons of your favourite shows',
                name: '3 Months FREE (Trial)',
                expirationDate: dayjs().subtract(1, 'month').format('MM/DD/YYYY') as string,
                logo: './assets/sample-images/deals/Deals3-4.1.png'
              } as DealsItemModel,
              {
                code: 'GETTHATPHONE212',
                description: 'Free 4 Month Notevault Subscription With Cat® Phones worth $578',
                name: 'CAT Limited Time Offer',
                expirationDate: dayjs().add(2, 'month').format('MM/DD/YYYY') as string,
                logo: './assets/sample-images/deals/Deals4-4.1.png'
              } as DealsItemModel
            ]
          } as DealsListingModel;

          return of(dealsListingModel);
        }
      );
    }

    return this._documentsCache.observable;
  }
}
