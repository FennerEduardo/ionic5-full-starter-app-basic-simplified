import { Component, OnInit, HostBinding } from '@angular/core';
import { ShowcaseService } from '../../showcase.service';
import { ShowcaseShellUsersListModel } from '../../showcase-shell.model';
import { DataStore, ShellModel } from '../../../shell/data-store';

@Component({
  selector: 'app-data-store-list',
  templateUrl: './data-store-list.page.html',
  styleUrls: ['./data-store-list.page.scss'],
})
export class DataStoreListPage implements OnInit {

  dataStore: DataStore<Array<ShowcaseShellUsersListModel>>;
  data: Array<ShowcaseShellUsersListModel> & ShellModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.data && this.data.isShell) ? true : false;
  }

  constructor(private showcaseService: ShowcaseService) { }

  ngOnInit() {
    const dataSource = this.showcaseService.getListDataSource();

    // Initialize the model specifying that it is a shell model
    const shellModel: Array<ShowcaseShellUsersListModel> = [
      new ShowcaseShellUsersListModel(),
      new ShowcaseShellUsersListModel(),
      new ShowcaseShellUsersListModel()
    ];
    this.dataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.dataStore.load(dataSource);

    this.dataStore.state.subscribe(data => {
      this.data = data;
    });
  }
}
