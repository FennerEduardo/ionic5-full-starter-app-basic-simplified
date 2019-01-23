import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserFriendsModel } from './user-friends.model';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.page.html',
  styleUrls: ['./user-friends.page.scss'],
})
export class UserFriendsPage implements OnInit {
  friends: UserFriendsModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.friends && this.friends.isShell) ? true : false;
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
              this.friends = observableData;
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
}
