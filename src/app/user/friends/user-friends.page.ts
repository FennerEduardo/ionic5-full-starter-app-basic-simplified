import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { UserFriendsModel } from './user-friends.model';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.page.html',
  styleUrls: [
    './styles/user-friends.page.scss',
    './styles/user-friends.shell.scss',
    './styles/user-friends.ios.scss',
    './styles/user-friends.md.scss'
  ]
})
export class UserFriendsPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;

  data: UserFriendsModel;

  segmentValue = 'friends';
  friendsList: Array<any>;
  followersList: Array<any>;
  followingList: Array<any>;
  searchQuery = '';
  showFilters = false;

  @HostBinding('class.is-shell') get isShell() {
    return (this.data && this.data.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
    .subscribe(
      (resolvedRouteData) => {
        const friendsDataStore: DataStore<UserFriendsModel> = resolvedRouteData['data'];

        // Route subscription resolved, now the active subscription is the the one from the DataStore
        this.subscriptions = friendsDataStore.state
        .subscribe(
          (state) => {
            this.data = state;
            this.friendsList = this.data.friends;
            this.followersList = this.data.followers;
            this.followingList = this.data.following;
          },
          (error) => {}
        );
      },
      (error) => {}
    );
  }

  segmentChanged(ev): void {
    this.segmentValue = ev.detail.value;

    // Check if there's any filter and apply it
    this.searchList();
  }

  searchList(): void {
    const query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';

    if (this.segmentValue === 'friends') {
      this.friendsList = this.filterList(this.data.friends, query);
    } else if (this.segmentValue === 'followers') {
      this.followersList = this.filterList(this.data.followers, query);
    } else if (this.segmentValue === 'following') {
      this.followingList = this.filterList(this.data.following, query);
    }
  }

  filterList(list, query): Array<any> {
    return list.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  }

  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave(): void {
    // console.log('TravelListingPage [ionViewWillLeave]');
    this.subscriptions.unsubscribe();
  }
}
