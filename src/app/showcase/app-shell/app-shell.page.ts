import { Component, OnInit } from '@angular/core';
import { Observable, timer, interval } from 'rxjs';
import { takeUntil, finalize, take } from 'rxjs/operators';
import { DataStore } from '../../shell/data-store';
import { ShowcaseService } from '../showcase.service';
import { ShowcaseShellModel } from '../showcase-shell.model';

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
  dataStoreData: Observable<ShowcaseShellModel>;

  // Aux properties for the Simple Fetch (HttpClient) showcase
  simpleFetchButtonDisabled = true;
  simpleFetchCountdown = 0;
  simpleFetchInterval: Observable<any>;

  // Aux properties for the DataStore showcase
  dataStoreButtonDisabled = true;

  constructor(private showcaseService: ShowcaseService) { }

  ngOnInit(): void {
    this.showcaseShellSimpleFetch(10);
    this.showcaseDataStore();
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

    this.dataStoreData = dataStore.state.pipe(
      take(2), // DataStore will emit a mock object and the real data fetched from the source. Emit those two values and then complete.
      finalize(() => this.dataStoreButtonDisabled = false)
    );
  }
}
