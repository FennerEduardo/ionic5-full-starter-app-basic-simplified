import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SubjectFetch } from '../utils/subject-fetch';

import { ProfileModel } from './profile.model';

@Injectable()
export class ProfileService {
  private _dataCache: SubjectFetch<ProfileModel>;

  constructor(private http: HttpClient) { }

  public getData(): Observable<ProfileModel> {
    // Use cache if we have it.
    if (!this._dataCache) {
      // Initialize the model specifying that it is a shell model
      const dataShell: ProfileModel = new ProfileModel(true);
      this._dataCache = new SubjectFetch(
        dataShell,
        () => this.http.get<ProfileModel>('./assets/sample-data/profile.json')
      );
    }

    return this._dataCache.observable;
  }
}
