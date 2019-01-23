import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProfileModel } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: ProfileModel;
  @HostBinding('class.is-shell') get isShell() {
    return (this.profile && this.profile.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.route.data.subscribe(routeData => {
        const data = routeData['data'];
        console.log('data - ProfilePage - ngOnInit()', data);

        if (data) {
          data.subscribe((observableData: ProfileModel) => {
            if (observableData) {
              this.profile = observableData;
            }

            console.log('observableData - ProfilePage - ngOnInit()', observableData);
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
