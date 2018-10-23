import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { delay } from 'rxjs/operators';

import { ListingModel } from './listing.model';

@Component({
  selector: 'app-fashion-listing',
  templateUrl: './fashion-listing.page.html',
  styleUrls: ['./fashion-listing.page.scss'],
})
export class FashionListingPage implements OnInit {
  listing: ListingModel;

  constructor(private route: ActivatedRoute) {
    // this._testing = route.snapshot.data['data'];
    // debugger;
  }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.route.data.subscribe(routeData => {
        const data = routeData['data'];
        console.log('data - FashionListingPage - ngOnInit()', data);

        // data.pipe(
        //   delay(3000)
        // )
        if (data) {
          data.subscribe((observableData: ListingModel) => {
            if (observableData && observableData.items) {
              this.listing = observableData;
            }

            console.log('observableData - FashionListingPage - ngOnInit()', observableData);
          });
        } else {
          alert('No route data 2');
        }
      });
    } else {
      alert('No route data');
    }

    // this._testing = this.route.snapshot.data['data'];
    // debugger;
  }

}
