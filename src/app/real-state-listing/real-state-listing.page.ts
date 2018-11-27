import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RealStateListingModel } from './real-state-listing.model';

@Component({
  selector: 'app-real-state-listing',
  templateUrl: './real-state-listing.page.html',
  styleUrls: ['./real-state-listing.page.scss'],
})
export class RealStateListingPage implements OnInit {
  listing: RealStateListingModel;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.route.data.subscribe(routeData => {
        const data = routeData['data'];
        console.log('data - RealStateListingPage - ngOnInit()', data);

        if (data) {
          data.subscribe((observableData: RealStateListingModel) => {
            if (observableData && observableData.items) {
              this.listing = observableData;
            }

            console.log('observableData - RealStateListingPage - ngOnInit()', observableData);
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
