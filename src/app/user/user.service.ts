import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SubjectFetch } from '../utils/subject-fetch';

import { UserProfileModel } from './user-profile/user-profile.model';
import { UserFriendsModel } from './user-friends/user-friends.model';

@Injectable()
export class UserService {
  private _dataCache: SubjectFetch<UserProfileModel>;

  constructor(private http: HttpClient) { }

  public getProfileData(): Observable<UserProfileModel> {
    // Use cache if we have it.
    if (!this._dataCache) {
      // Initialize the model specifying that it is a shell model
      const dataShell: UserProfileModel = new UserProfileModel(true);
      this._dataCache = new SubjectFetch(
        dataShell,
        () => this.http.get<UserProfileModel>('./assets/sample-data/user/user-profile.json')
      );
    }

    return this._dataCache.observable;
  }

  public getFriendsData(): Observable<UserFriendsModel> {
    // Use cache if we have it.
    if (!this._dataCache) {
      // Initialize the model specifying that it is a shell model
      const dataShell: UserProfileModel = new UserFriendsModel(true);
      this._dataCache = new SubjectFetch(
        dataShell,
        () => this.http.get<UserProfileModel>('./assets/sample-data/user/user-friends.json')
      );
    }

    return this._dataCache.observable;
  }
}
