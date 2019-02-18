import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, timer, interval } from 'rxjs';
import { first, takeUntil, finalize, take } from 'rxjs/operators';

import * as dayjs from 'dayjs';

import { SubjectFetch } from '../utils/subject-fetch';

// You can use a plain interface as a shell model
interface IShell {
  cover: string;
  image: string;
  title: string;
  description: string;
}

// You can also use a Class object as a shell model
import { ShowcaseShellModel } from './models/showcase-shell.model';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.page.html',
  styleUrls: ['./showcase.page.scss']
})
export class ShowcasePage implements OnInit {
  // We will manually fetch data using the HttpClient and assign it to this property
  simpleFetchData: {
    cover: string,
    image: string,
    title: string,
    description: string
  };
  // You can also define the type of the property using the IShell interface or the ShowcaseShellModel class
  // simpleFetchData: IShell;
  // simpleFetchData: ShowcaseShellModel;

  // Fetch data with the SubjectFetch utility and assign it to this property
  // SubjectFetch data is async (Observable)
  subjectFetchData: Observable<{
    cover: string,
    image: string,
    title: string,
    description: string
  }>;
  // You can also define the type of the property using the IShell interface or the ShowcaseShellModel class
  // subjectFetchData: Observable<IShell>;
  // subjectFetchData: Observable<ShowcaseShellModel>;

  // We will assign data coming from the Route Resolver to this property
  routeResolveData: ShowcaseShellModel;

  // Aux properties for the Simple Fetch (HttpClient) showcase
  simpleFetchButtonDisabled = true;
  simpleFetchCountdown = 0;
  simpleFetchInterval: Observable<any>;

  // Aux properties for the SubjectFetch showcase
  subjectFetchButtonDisabled = true;

  // Relative date (better to showcase UI micro-interactions)
  countdownDate: string = dayjs().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss') as string;
  // Instead of hardcoded one
  // countdownDate = '12/01/2018';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('ShowcasePage - ngOnInit()');

    if (this.route && this.route.data) {
      this.route.data.subscribe(routeData => {
        const resolvedHotObservable = routeData['data'];
        console.log('ShowcasePage - Subscribe to Route Resolve Observable => HotObservable: ', resolvedHotObservable);

        if (resolvedHotObservable) {
          resolvedHotObservable.subscribe((pageData: ShowcaseShellModel) => {
            // tslint:disable-next-line:max-line-length
            console.log('ShowcasePage - Subscribe to HotObservable (can emmit multiple values) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
            // As we are implementing an App Shell architecture, pageData will be firstly an empty shell model,
            // and the real remote data once it gets fetched
            if (pageData) {
              this.routeResolveData = pageData;
            }
          });
        } else {
          alert('No route data 2');
        }
      });
    } else {
      alert('No route data');
    }

    this.showcaseShellSimpleFetch(10);
    this.showcaseShellSubjectFetch();
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
        // You can also define the type of the property using the IShell interface or the ShowcaseShellModel class
        // this.http.get<IShell>('./assets/sample-data/showcase/shell.json');
        // this.http.get<ShowcaseShellModel>('./assets/sample-data/showcase/shell.json');
        this.http.get<{
          cover: string,
          image: string,
          title: string,
          description: string
        }>('./assets/sample-data/showcase/shell.json')
        .pipe(
          take(1) // Force Observable to complete
        ).subscribe(val => {
          console.log('Fetching shell data using the HttpClient', val);
          this.simpleFetchData = val;
        });
      }
    });
  }

  showcaseShellSubjectFetch(): void {
    // Prevent rage clicks on the 'Fetch more Data' button
    this.subjectFetchButtonDisabled = true;

    const shellObject: {
      cover: string,
      image: string,
      title: string,
      description: string
    } = null;

    const subjectFetch = new SubjectFetch(
      shellObject,
      () => this.http.get<{
        cover: string,
        image: string,
        title: string,
        description: string
      }>('./assets/sample-data/showcase/shell.json')
      // You can also define the type of the property using the IShell interface or the ShowcaseShellModel class
      // () => this.http.get<IShell>('./assets/sample-data/showcase/shell.json');
      // () => this.http.get<ShowcaseShellModel>('./assets/sample-data/showcase/shell.json');
    );

    this.subjectFetchData = subjectFetch.observable.pipe(
      take(2), // SubjectFetch will emit a mock object and the real data fetched from the source. Emit those two values and then complete.
      finalize(() => this.subjectFetchButtonDisabled = false)
    );
  }
}
