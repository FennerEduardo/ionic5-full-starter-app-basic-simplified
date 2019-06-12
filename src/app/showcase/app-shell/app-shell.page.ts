import { Component, OnInit } from '@angular/core';
import { Observable, timer, interval, merge, Subject, of, combineLatest } from 'rxjs';
import { takeUntil, finalize, take, map, switchMap, delay, startWith } from 'rxjs/operators';
import { DataStore } from '../../shell/data-store';
import { ShowcaseService } from '../showcase.service';
import { ShowcaseShellModel, ShowcaseShellRemoteApiModel } from '../showcase-shell.model';

@Component({
  selector: 'app-showcase-shell',
  templateUrl: './app-shell.page.html',
  styleUrls: ['./app-shell.page.scss']
})
export class AppShellPage implements OnInit {
  sampleTextShellData = '';

  // We will manually fetch data using the HttpClient and assign it to this property
  simpleFetchData: ShowcaseShellModel;

  // Fetch data with the DataStore utility and assign it to this property
  // DataStore data is async (Observable)
  dataStoreData: ShowcaseShellModel;
  dataStoreButtonDisabled = true;

  // Aux properties for the Simple Fetch (HttpClient) showcase
  simpleFetchButtonDisabled = true;
  simpleFetchCountdown = 0;
  simpleFetchInterval: Observable<any>;

  // Fetch data with the DataStore utility and assign it to this property
  // DataStore data is async (Observable)
  remoteApiDataStore: DataStore<Array<ShowcaseShellRemoteApiModel>>;
  remoteApiDataState: Array<ShowcaseShellRemoteApiModel> = [];
  dataStoreRemoteApiButtonDisabled = false;
  dataStoreRemoteApiCounter = 1;
  addRemoteApiDataSubject: Subject<any> = new Subject<any>();
  newRemoteApiDataObservable: Observable<any> = this.addRemoteApiDataSubject.asObservable();

  dynamicUsers: Array<Observable<ShowcaseShellRemoteApiModel>> = [];

  constructor(private showcaseService: ShowcaseService) { }

  ngOnInit(): void {
    this.showcaseShellSimpleFetch(10);
    this.showcaseDataStore();
    this.loadStackedResult();

    const dataSource = this.showcaseService.getShowcaseRemoteApiDataSource(this.dataStoreRemoteApiCounter);

    if (!this.remoteApiDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<ShowcaseShellRemoteApiModel> = [
        new ShowcaseShellRemoteApiModel(true),
        new ShowcaseShellRemoteApiModel(true)
      ];
      this.remoteApiDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.remoteApiDataStore.load(dataSource);
    }

    const newDataObservable = this.newRemoteApiDataObservable.pipe(
      switchMap(() => {
        const pageData =  this.showcaseService.getShowcaseRemoteApiDataSource(this.dataStoreRemoteApiCounter);

        const delayObservable = of(true).pipe(delay(400));

        return combineLatest([delayObservable, pageData]).pipe(
          map(([delayValue, dataValue]) => dataValue),
          startWith([
            new ShowcaseShellRemoteApiModel(true),
            new ShowcaseShellRemoteApiModel(true),
            new ShowcaseShellRemoteApiModel(true)
          ])
        );
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

  showcaseShellSimpleFetch(countdown: number): void {
    // Assign an (empty / null) value to the shell object to restore it's 'loading' state
    this.simpleFetchData = null;

    // Prevent rage clicks on the 'Fetch more Data' button
    this.simpleFetchButtonDisabled = true;

    // Start a countdown and an interval before executing the fetch function
    this.simpleFetchCountdown = countdown;
    this.simpleFetchInterval = interval(1000);

    // Start a countdown to showcase the shell elements animations for a few seconds before the data get's fetched into the shell object
    const timer$ = timer(countdown * 1000);
    // When timer emits after X seconds, complete source
    this.simpleFetchInterval
    .pipe(
      takeUntil(timer$),
      finalize(() => this.simpleFetchButtonDisabled = false)
    )
    .subscribe({
      next: () => {
        this.simpleFetchCountdown --;
      },
      complete: () => {
        this.simpleFetchCountdown = 0;
        // Once the countdown ends, fetch data using the HttpClient
        this.showcaseService.getShowcaseDataSource()
        .pipe(
          take(1) // Force Observable to complete
        ).subscribe(val => {
          console.log('Fetching shell data using the HttpClient', val);
          this.simpleFetchData = val;
        });
      }
    });
  }

  showcaseDataStore(): void {
    // Prevent rage clicks on the 'Fetch more Data' button
    this.dataStoreButtonDisabled = true;

    const dataSource = this.showcaseService.getShowcaseDataSource();

    // Initialize the model specifying that it is a shell model
    const shellModel: ShowcaseShellModel = new ShowcaseShellModel(true);
    const dataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    dataStore.load(dataSource);

    dataStore.state.pipe(
      take(2), // DataStore will emit a mock object and the real data fetched from the source. Emit those two values and then complete.
      finalize(() => this.dataStoreButtonDisabled = false)
    ).subscribe(data => {
      this.dataStoreData = data;
    });
  }

  showcaseDataStoreFromRemoteAPI(): void {
    this.dataStoreRemoteApiCounter ++;
    this.addRemoteApiDataSubject.next();
  }

  // TODO: Refactorear
  loadStackedResult(): void {
    const newUser = {
      first_name: 'Agustin',
      last_name: 'Nitsuga',
      avatar: './assets/sample-images/user/person_1.jpg'
    } as ShowcaseShellRemoteApiModel;
    const newShell = new ShowcaseShellRemoteApiModel(true);

    this.dynamicUsers.push(this.AppendShell(of(newUser), newShell, 1000));
  }

  // TODO: Mover a DataStore (Hacerlo un metodo static)
  AppendShell(dataObservable: Observable<any>, shellModel, networkDelay = 400): Observable<any> {
    const delayObservable = of(true).pipe(
      delay(networkDelay)
    );

    return combineLatest([
      delayObservable,
      dataObservable
    ]).pipe(
      // Dismiss unnecessary delayValue
      map(([delayValue, dataValue]: [boolean, any]) => dataValue),
      // Set the shell model as the initial value
      startWith(shellModel),
      // When debugging shell UI, only allow shell values. Filter out everything else.
      // filter((dataValue: T) => ((this.debugMode) ? dataValue.isShell : true))
    );
  }
}
