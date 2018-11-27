import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DealsListingModel } from './deals-listing.model';

@Component({
  selector: 'app-deals-listing',
  templateUrl: './deals-listing.page.html',
  styleUrls: ['./deals-listing.page.scss'],
})
export class DealsListingPage implements OnInit {
  listing: DealsListingModel;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.route.data.subscribe(routeData => {
        const data = routeData['data'];
        console.log('data - DealsListingPage - ngOnInit()', data);

        if (data) {
          data.subscribe((observableData: DealsListingModel) => {
            if (observableData && observableData.items) {
              this.listing = observableData;
            }

            console.log('observableData - DealsListingPage - ngOnInit()', observableData);
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
