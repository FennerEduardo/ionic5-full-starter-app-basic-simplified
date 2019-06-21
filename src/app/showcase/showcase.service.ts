import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, combineLatest, of, forkJoin } from 'rxjs';
import { delay, finalize, tap, map, filter, concatMap } from 'rxjs/operators';
// tslint:disable-next-line:max-line-length
import { ShowcaseShellModel, ShowcasePostModel, ShowcaseCommentModel, ShowcaseCombinedTaskUserModel, ShowcaseUser2Model, ShowcaseTaskModel } from './showcase-shell.model';
import { DataStore, ShellModel } from '../shell/data-store';
import { TravelListingModel } from '../travel/listing/travel-listing.model';
import { FashionListingModel } from '../fashion/listing/fashion-listing.model';

@Injectable()
export class ShowcaseService {
  private showcaseDataStore: DataStore<ShowcaseShellModel>;

  constructor(private http: HttpClient) { }

  public getDataSourceWithDelay(): Observable<ShowcaseShellModel> {
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

  public getSimpleDataSource(): Observable<ShowcaseShellModel> {
    return this.http.get<ShowcaseShellModel>('./assets/sample-data/showcase/shell.json');
  }

  public getSimpleDataStore(dataSource: Observable<ShowcaseShellModel>): DataStore<ShowcaseShellModel> {
    // Use cache if available
    if (!this.showcaseDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: ShowcaseShellModel = new ShowcaseShellModel();
      this.showcaseDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.showcaseDataStore.load(dataSource);
    }
    return this.showcaseDataStore;
  }

  public getListDataSource(): Observable<any> {
    return this.http.get('https://reqres.in/api/users').pipe(map(result => result['data']));
  }

  public getPaginationDataSource(page: number): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=' + page).pipe(map(result => result['data']));
  }

  public getMultipleDataSourceA(): Observable<TravelListingModel> {
    return this.http.get<TravelListingModel>('./assets/sample-data/travel/listing.json');
  }

  public getMultipleDataSourceB(): Observable<FashionListingModel> {
      return this.http.get<FashionListingModel>('./assets/sample-data/fashion/listing.json');
  }

  public getDependantDataSourcePost(): Observable<ShowcasePostModel> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1');
  }

  // tslint:disable-next-line:max-line-length
  public getDependantDataSourcePostComments(dependantDataSource: Observable<ShowcasePostModel & ShellModel>): Observable<Array<ShowcaseCommentModel>> {
    return dependantDataSource.pipe(
      // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
      filter(post => !post.isShell),
      concatMap(post => {
        return this.http.get<any>('https://jsonplaceholder.typicode.com/comments?postId=' + post.id);
      })
    );
  }

  getUser(userId: number): Observable<ShowcaseUser2Model> {
    return this.http.get<ShowcaseUser2Model>('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getTasks(): Observable<Array<ShowcaseTaskModel>> {
    return this.http.get<Array<ShowcaseTaskModel>>('https://jsonplaceholder.typicode.com/todos');
  }

  // Concat the task with the details of the user
  public getCombinedTasksUserDataSource(): Observable<Array<ShowcaseCombinedTaskUserModel>> {
    return this.getTasks().pipe(
      concatMap(tasks => {
        const completeTaskData = tasks.map(task => {
          // for each task retrun a new observable with the ShowcaseCombinedTaskUserModel
          const taskUser: Observable<ShowcaseUser2Model> = this.getUser(task.userId);

          return combineLatest([
            of(task),
            taskUser
          ]).pipe(
            map(([taskData, user]: [ShowcaseTaskModel, ShowcaseUser2Model]) => {
              return {
                ...taskData,
                user: user
              } as ShowcaseCombinedTaskUserModel;
            })
          );
        });
        return forkJoin(completeTaskData);
      })
    );
  }

}
