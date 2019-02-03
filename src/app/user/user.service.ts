import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SubjectFetch } from '../utils/subject-fetch';

import { UserProfileModel } from './profile/user-profile.model';
import { UserFriendsModel } from './friends/user-friends.model';

@Injectable()
export class UserService {
  private _profileDataCache: SubjectFetch<UserProfileModel>;
  private _friendsDataCache: SubjectFetch<UserFriendsModel>;

  constructor(private http: HttpClient) { }

  public getProfileData(): Observable<UserProfileModel> {
    // Use cache if we have it.
    if (!this._profileDataCache) {
      // Initialize the model specifying that it is a shell model
      const dataShell: UserProfileModel = new UserProfileModel(true);
      this._profileDataCache = new SubjectFetch(
        dataShell,
        () => this.http.get<UserProfileModel>('./assets/sample-data/user/user-profile.json')
      );
    }

    return this._profileDataCache.observable;
  }

  public getFriendsData(): Observable<UserFriendsModel> {
    // Use cache if we have it.
    if (!this._friendsDataCache) {
      // Initialize the model specifying that it is a shell model
      const dataShell: UserFriendsModel = new UserFriendsModel(true);
      this._friendsDataCache = new SubjectFetch(
        dataShell,
        () => this.http.get<UserFriendsModel>('./assets/sample-data/user/user-friends.json')
      );
    }

    return this._friendsDataCache.observable;
  }
}
