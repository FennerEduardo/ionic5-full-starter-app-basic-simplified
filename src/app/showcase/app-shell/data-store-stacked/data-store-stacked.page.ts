import { Component, OnInit } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';

import { ShowcaseShellUserModel } from '../../showcase-shell.model';

import { DataStore } from '../../../shell/data-store';

@Component({
  selector: 'app-data-store-stacked',
  templateUrl: './data-store-stacked.page.html',
  styleUrls: ['./data-store-stacked.page.scss'],
})
export class DataStoreStackedPage implements OnInit {
  // View model
  stackedUsers: Array<Observable<ShowcaseShellUserModel>> = [];
  // View data store (it's an open stream of data)
  openDataStore: DataStore<Array<ShowcaseShellUserModel>>;
  // A flag to detect when the shell toggles, this tell us whether to reset or push values to the stackedUsers property
  shellToggled = false;


  // TODO: pasar esto al contructor
  showcaseService: any;
  // TODO: pasar esta property al servicio
  openDataStream: ReplaySubject<Array<ShowcaseShellUserModel>> = new ReplaySubject<Array<ShowcaseShellUserModel>>();

  constructor() { }

  ngOnInit() {
    // TODO: cuando pasemos el service al constructur sacar esta linea
    this.showcaseService = this;

    const openDataSource = this.showcaseService.getOpenDataSource();

    const shellModel: Array<ShowcaseShellUserModel> = [
      new ShowcaseShellUserModel(),
      new ShowcaseShellUserModel(),
      new ShowcaseShellUserModel()
    ];

    this.openDataStore = new DataStore(shellModel);
    this.openDataStore.load(openDataSource);

    this.openDataStore.state.subscribe(data => {
      console.log('data', data);

      if (data.isShell) {
        this.shellToggled = false;

        const shellsAsObservables = [...data].map((val) => {
          // Transform plain shell values into async Observables (to comply with the layout markup)
          return of(val);
        });

        // When loading new data, override the stackedUsers property
        this.stackedUsers = shellsAsObservables;
      } else {
        let dataWithShell: Array<Observable<ShowcaseShellUserModel>>;

        // When the shell toggles, reset the stackedUsers property to show real data instead of shell values
        if (!this.shellToggled) {
          this.stackedUsers = [];
          this.shellToggled = true;

          // As this is the first real value after shell models, no need to re-apply shell animation
          dataWithShell = [...data].map((val) => {
            // Transform plain values into async Observables (to comply with the layout markup)
            return of(val);
          });
        } else {
          // Case for future values after the shell toggled
          dataWithShell = [...data].map((val) => {
            // Transform plain values into async Observables (to comply with the layout markup)
            return DataStore.AppendShell(of(val), new ShowcaseShellUserModel(), 1000);
          });
        }

        if (dataWithShell && dataWithShell.length > 0) {
          // Concat data to existing stackedUsers property
          this.stackedUsers.push(...dataWithShell);
        }
      }
    });
  }

  loadStackedResults(): void {
    this.showcaseService.pushStackedValues();
  }

  // TODO: pasar este metodo al servicio
  public getOpenDataSource(): Observable<Array<ShowcaseShellUserModel>> {
    this.showcaseService.pushStackedValues();
    return this.openDataStream.asObservable();
  }

  // TODO: pasar este metodo al servicio
  public pushStackedValues(): void {
    const newUser = {
      first_name: 'Agustin',
      last_name: 'Nitsuga',
      avatar: './assets/sample-images/user/person_1.jpg'
    } as ShowcaseShellUserModel;

    // Get a random integer between 1 (and only 1) and 'max'
    const getRand: (max: number, min?: number) => number = (max, min = 1) => {
      return Math.floor(Math.random() * max) + min;
    };

    // Randomly send one, two or three users
    const stackedValues = Array(getRand(3)).fill(newUser);

    this.openDataStream.next(stackedValues);
  }
}
