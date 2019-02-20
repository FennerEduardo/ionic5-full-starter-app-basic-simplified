import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay, throttleTime } from 'rxjs/operators';

import { SubjectFetch } from '../utils/subject-fetch';
import { ShellProvider } from '../utils/shell-provider';

import { ShowcaseShellModel } from './showcase-shell.model';

@Injectable()
export class ShowcaseService {
  private _detailsCache: SubjectFetch<ShowcaseShellModel>;
  private _dataWithShellCache: ShellProvider<ShowcaseShellModel>;
  private _hotObservableDetailsCache: SubjectFetch<ShowcaseShellModel>;

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

  public hotObservableDetails(): Observable<ShowcaseShellModel> {
    // Use cache if we have it.
    if (!this._hotObservableDetailsCache) {
      // Initialize the model specifying that it is a shell model
      const detailsShell: ShowcaseShellModel = new ShowcaseShellModel(true);
      this._hotObservableDetailsCache = new SubjectFetch(
        detailsShell,
        () => this.http.get<ShowcaseShellModel>('./assets/sample-data/showcase/shell.json').pipe(delay(5000))
      );
    }

    return this._hotObservableDetailsCache.observable;
  }

  public getDataWithShell(): Observable<ShowcaseShellModel> {
    // Try to use cache first, so we don't create multiple Observables
    if (!this._dataWithShellCache) {
      // Initialize the model specifying that it is a shell model
      const shellModel: ShowcaseShellModel = new ShowcaseShellModel(true);
      const dataObservable = this.coldObservableDetails();

      const shellProvider = new ShellProvider(
        shellModel,
        dataObservable
      );
      this._dataWithShellCache = shellProvider;
    }

    return this._dataWithShellCache.observable;
  }

  public coldObservableDetails(): Observable<ShowcaseShellModel> {
    const coldObservable = this.http.get<ShowcaseShellModel>('./assets/sample-data/showcase/shell.json').pipe(delay(5000));

    return coldObservable;
  }
}
