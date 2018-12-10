import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RealStateDetailsModel } from './real-state-details.model';

@Component({
  selector: 'app-real-state-details',
  templateUrl: './real-state-details.page.html',
  styleUrls: ['./real-state-details.page.scss'],
})
export class RealStateDetailsPage implements OnInit {
  details: RealStateDetailsModel;
  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.route.data.subscribe(routeData => {
        const data = routeData['data'];
        console.log('data - RealStateDetailsPage - ngOnInit()', data);

        if (data) {
          data.subscribe((observableData: RealStateDetailsModel) => {
            if (observableData) {
              this.details = observableData;
            }

            console.log('observableData - RealStateDetailsPage - ngOnInit()', observableData);
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
