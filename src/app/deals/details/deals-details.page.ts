import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { DealsDetailsModel } from './deals-details.model';

@Component({
  selector: 'app-deals-details',
  templateUrl: './deals-details.page.html',
  styleUrls: [
    './styles/deals-details.page.scss',
    './styles/deals-details.shell.scss'
  ]
})
export class DealsDetailsPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;

  details: DealsDetailsModel;
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };

  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
    .subscribe(
      (resolvedRouteData) => {
        const detailsDataStore: DataStore<DealsDetailsModel> = resolvedRouteData['data'];

        // Route subscription resolved, now the active subscription is the the one from the DataStore
        this.subscriptions = detailsDataStore.state
        .subscribe(
          (state) => {
            this.details = state;
          },
          (error) => {}
        );
      },
      (error) => {}
    );
  }

  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave(): void {
    this.subscriptions.unsubscribe();
  }
}
