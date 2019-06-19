import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ShowcaseShellUserModel } from '../../showcase-shell.model';

import { DataStore } from '../../../shell/data-store';

@Component({
  selector: 'app-data-store-stacked',
  templateUrl: './data-store-stacked.page.html',
  styleUrls: ['./data-store-stacked.page.scss'],
})
export class DataStoreStackedPage implements OnInit {
  dynamicUsers: Array<Observable<ShowcaseShellUserModel>> = [];

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
    } as ShowcaseShellUserModel;
    const newShell = new ShowcaseShellUserModel();

    const dataSourceWithShellObservable = DataStore.AppendShell(of(newUser), newShell, 1000);

    this.dynamicUsers.push(dataSourceWithShellObservable);
  }
}
