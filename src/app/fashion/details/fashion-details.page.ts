import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FashionDetailsModel } from './fashion-details.model';

@Component({
  selector: 'app-fashion-details',
  templateUrl: './fashion-details.page.html',
  styleUrls: ['./fashion-details.page.scss'],
})
export class FashionDetailsPage implements OnInit {
  details: FashionDetailsModel;
  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.route.data.subscribe(routeData => {
        const data = routeData['data'];
        console.log('data - FashionDetailsPage - ngOnInit()', data);

        if (data) {
          data.subscribe((observableData: FashionDetailsModel) => {
            if (observableData) {
              this.details = observableData;
            }

            console.log('observableData - FashionDetailsPage - ngOnInit()', observableData);
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
