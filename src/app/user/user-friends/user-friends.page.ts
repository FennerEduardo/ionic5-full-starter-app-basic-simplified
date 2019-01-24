import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserFriendsModel } from './user-friends.model';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.page.html',
  styleUrls: ['./user-friends.page.scss'],
})
export class UserFriendsPage implements OnInit {
  data: UserFriendsModel;
  segmentValue = 'friends';
  friendsList;
  followersList;
  followingList;

  @HostBinding('class.is-shell') get isShell() {
    return (this.data && this.data.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.route.data.subscribe(routeData => {
        const data = routeData['data'];
        console.log('data - UserFriendsPage - ngOnInit()', data);

        if (data) {
          data.subscribe((observableData: UserFriendsModel) => {
            if (observableData) {
              this.data = observableData;
              this.friendsList = this.data.friends;
              this.followersList = this.data.followers;
              this.followingList = this.data.following;
            }

            console.log('observableData - UserFriendsPage - ngOnInit()', observableData);
          });
        } else {
          alert('No route data 2');
        }
      });
    } else {
      alert('No route data');
    }
  }

  segmentChanged(ev) {
    this.segmentValue = ev.detail.value;
  }

  searchList(ev) {
    const searchText = ev.detail.value;

    if (this.segmentValue === 'friends') {
      this.friendsList = this.filterList(this.data.friends, searchText);
    } else if (this.segmentValue === 'followers') {
      this.followersList = this.filterList(this.data.followers, searchText);
    } else if (this.segmentValue === 'following') {
      this.followingList = this.filterList(this.data.following, searchText);
    }
  }

  filterList(list, searchText) {
    return list.filter(friend => friend.name.trim().toLowerCase().includes(searchText));
  }
}
