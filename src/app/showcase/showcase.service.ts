import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay, finalize, tap, map } from 'rxjs/operators';

import { ShowcaseShellModel, ShowcaseShellRemoteApiModel } from './showcase-shell.model';
import { DataStore } from '../shell/data-store';

@Injectable()
export class ShowcaseService {
  private showcaseDataStore: DataStore<ShowcaseShellModel>;

  constructor(private http: HttpClient) { }

  public getShowcaseDataSourceWithDelay(): Observable<ShowcaseShellModel> {
    return this.http.get<ShowcaseShellModel>('./assets/sample-data/showcase/shell.json').pipe(
      tap(val => {
        console.log('getData STARTED');
        // tslint:disable-next-line:no-console
        console.time('getData Roundtrip');
      }),
      delay(5000),
      finalize(() => {
        console.log('getData COMPLETED');
        // tslint:disable-next-line:no-console
        console.timeEnd('getData Roundtrip');
      }));
  }

  public getShowcaseDataSource(): Observable<ShowcaseShellModel> {
    return this.http.get<ShowcaseShellModel>('./assets/sample-data/showcase/shell.json');
  }

  public getShowcaseDataStore(dataSource: Observable<ShowcaseShellModel>): DataStore<ShowcaseShellModel> {
    // Use cache if available
    if (!this.showcaseDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: ShowcaseShellModel = new ShowcaseShellModel(true);
      this.showcaseDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.showcaseDataStore.load(dataSource);
    }
    return this.showcaseDataStore;
  }

  public getShowcaseRemoteApiDataSource(page: number): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=' + page).pipe(map(result => result['data']));
  }

  public getShowcaseRemoteApiDataStore(dataSource: Observable<ShowcaseShellRemoteApiModel>): DataStore<ShowcaseShellRemoteApiModel> {
    // Initialize the model specifying that it is a shell model
    const shellModel: ShowcaseShellRemoteApiModel = new ShowcaseShellRemoteApiModel(true);
    const showcaseRemoteApiDataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    showcaseRemoteApiDataStore.load(dataSource);

    return showcaseRemoteApiDataStore;
  }
}
