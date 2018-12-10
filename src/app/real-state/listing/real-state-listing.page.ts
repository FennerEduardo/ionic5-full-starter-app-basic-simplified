import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RealStateListingModel } from './real-state-listing.model';

@Component({
  selector: 'app-real-state-listing',
  templateUrl: './real-state-listing.page.html',
  styleUrls: ['./real-state-listing.page.scss'],
})
export class RealStateListingPage implements OnInit {
  listing: RealStateListingModel;
  // You can add a class to know when the shell has finish loading to the entire page or by using [ngClass] in the html
  //    <ion-content [ngClass]="{'is-shell': (listing.isShell)}">
  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
}

  constructor(private route: ActivatedRoute) { }

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
