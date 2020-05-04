import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { UserProfileModel } from './user-profile.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: [
    './styles/user-profile.page.scss',
    './styles/user-profile.shell.scss',
    './styles/user-profile.ios.scss',
    './styles/user-profile.md.scss'
  ],
})
export class UserProfilePage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;

  profile: UserProfileModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.profile && this.profile.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
    .subscribe(
      (resolvedRouteData: IResolvedRouteData<UserProfileModel>) => {
        // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
        this.subscriptions = ResolverHelper.extractData<UserProfileModel>(resolvedRouteData.data, UserProfileModel)
        .subscribe(
          (state) => {
            this.profile = state;
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
    // console.log('TravelListingPage [ionViewWillLeave]');
    this.subscriptions.unsubscribe();
  }
}
