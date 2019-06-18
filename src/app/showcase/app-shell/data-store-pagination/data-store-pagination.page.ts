import { Component, OnInit } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ShowcaseShellRemoteApiModel } from '../../showcase-shell.model';
import { ShowcaseService } from '../../showcase.service';

import { DataStore } from '../../../shell/data-store';

@Component({
  selector: 'app-data-store-pagination',
  templateUrl: './data-store-pagination.page.html',
  styleUrls: ['./data-store-pagination.page.scss'],
})
export class DataStorePaginationPage implements OnInit {
  // Fetch data with the DataStore utility and assign it to this property
  // DataStore data is async (Observable)
  remoteApiDataStore: DataStore<Array<ShowcaseShellRemoteApiModel>>;
  remoteApiDataState: Array<ShowcaseShellRemoteApiModel> = [];
  dataStoreRemoteApiButtonDisabled = false;
  dataStoreRemoteApiCounter = 1;
  addRemoteApiDataSubject: Subject<any> = new Subject<any>();
  newRemoteApiDataObservable: Observable<any> = this.addRemoteApiDataSubject.asObservable();

  constructor(private showcaseService: ShowcaseService) { }

  ngOnInit() {
    const dataSource = this.showcaseService.getShowcaseRemoteApiDataSource(this.dataStoreRemoteApiCounter);

    if (!this.remoteApiDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<ShowcaseShellRemoteApiModel> = [
        new ShowcaseShellRemoteApiModel(),
        new ShowcaseShellRemoteApiModel()
      ];
      this.remoteApiDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.remoteApiDataStore.load(dataSource);
    }

    const newDataObservable = this.newRemoteApiDataObservable.pipe(
      switchMap(() => {
        const pageDataSource = this.showcaseService.getShowcaseRemoteApiDataSource(this.dataStoreRemoteApiCounter);
        const newDataShell = [
          new ShowcaseShellRemoteApiModel(),
          new ShowcaseShellRemoteApiModel(),
          new ShowcaseShellRemoteApiModel()
        ];

        const dataSourceWithShellObservable = DataStore.AppendShell(pageDataSource, newDataShell, 400);

        return dataSourceWithShellObservable;
      })
    );

    merge(
      this.remoteApiDataStore.state,
      newDataObservable
    )
    .subscribe(result => {
      if (!result.isShell && result.length === 0) {
        this.dataStoreRemoteApiButtonDisabled = true;
      }
      this.remoteApiDataState = result;
    });
  }

  showcaseDataStoreFromRemoteAPI(): void {
    this.dataStoreRemoteApiCounter ++;
    this.addRemoteApiDataSubject.next();
  }
}
