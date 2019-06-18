import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ShowcaseShellRemoteApiModel } from '../../showcase-shell.model';

import { DataStore } from '../../../shell/data-store';

@Component({
  selector: 'app-data-store-stacked',
  templateUrl: './data-store-stacked.page.html',
  styleUrls: ['./data-store-stacked.page.scss'],
})
export class DataStoreStackedPage implements OnInit {
  dynamicUsers: Array<Observable<ShowcaseShellRemoteApiModel>> = [];

  constructor() { }

  ngOnInit() {
    this.loadStackedResult();
  }

  // TODO: Refactorear
  loadStackedResult(): void {
    const newUser = {
      first_name: 'Agustin',
      last_name: 'Nitsuga',
      avatar: './assets/sample-images/user/person_1.jpg'
    } as ShowcaseShellRemoteApiModel;
    const newShell = new ShowcaseShellRemoteApiModel();

    const dataSourceWithShellObservable = DataStore.AppendShell(of(newUser), newShell, 1000);

    this.dynamicUsers.push(dataSourceWithShellObservable);
  }
}
