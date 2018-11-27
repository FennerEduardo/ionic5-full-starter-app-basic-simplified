import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FoodListingModel } from './food-listing.model';

@Component({
  selector: 'app-food-listing',
  templateUrl: './food-listing.page.html',
  styleUrls: ['./food-listing.page.scss'],
})
export class FoodListingPage implements OnInit {
  listing: FoodListingModel;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.route.data.subscribe(routeData => {
        const data = routeData['data'];
        console.log('data - FoodListingPage - ngOnInit()', data);

        if (data) {
          data.subscribe((observableData: FoodListingModel) => {
            if (observableData && observableData.items) {
              this.listing = observableData;
            }

            console.log('observableData - FoodListingPage - ngOnInit()', observableData);
          });
        } else {
          alert('No route data 2');
        }
      });
    } else {
      alert('No route data');
    }
  }
}
