import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SubjectFetch } from '../utils/subject-fetch';

import { ShowcaseShellModel } from './models/showcase-shell.model';

@Injectable()
export class ShowcaseService {
  private _detailsCache: SubjectFetch<ShowcaseShellModel>;

  constructor(private http: HttpClient) { }

  public shellDetails(): Observable<ShowcaseShellModel> {
    // Use cache if we have it.
    if (!this._detailsCache) {
      // Initialize the model specifying that it is a shell model
      const detailsShell: ShowcaseShellModel = new ShowcaseShellModel(true);
      this._detailsCache = new SubjectFetch(
        detailsShell,
        () => this.http.get<ShowcaseShellModel>('./assets/sample-data/showcase/shell.json')
      );
    }

    return this._detailsCache.observable;
  }
}
