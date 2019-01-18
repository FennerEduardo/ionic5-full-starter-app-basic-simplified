import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DealsDetailsModel } from './deals-details.model';

@Component({
  selector: 'app-deals-details',
  templateUrl: './deals-details.page.html',
  styleUrls: ['./deals-details.page.scss']
})
export class DealsDetailsPage implements OnInit {
  details: DealsDetailsModel;
  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.route.data.subscribe(routeData => {
        const data = routeData['data'];
        console.log('data - DealsDetailsPage - ngOnInit()', data);

        if (data) {
          data.subscribe((observableData: DealsDetailsModel) => {
            if (observableData) {
              this.details = observableData;
            }

            console.log('observableData - DealsDetailsPage - ngOnInit()', observableData);
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
