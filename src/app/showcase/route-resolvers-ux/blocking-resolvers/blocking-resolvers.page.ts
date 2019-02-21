import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// You can also use a Class object as a shell model
import { ShowcaseShellModel } from '../../showcase-shell.model';

@Component({
  selector: 'app-showcase-blocking-resolvers',
  templateUrl: './blocking-resolvers.page.html',
  styleUrls: ['./blocking-resolvers.page.scss']
})
export class BlockingResovlersPage implements OnInit {
  // We will assign data coming from the Route Resolver to this property
  routeResolveData: ShowcaseShellModel;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('ShowcaseColdObservablePage - ngOnInit()');

    if (this.route && this.route.data) {
      this.route.data.subscribe(routeData => {
        const resolvedHotObservable = routeData['data'];
        console.log('ShowcaseHotObservablePage - Subscribe to Route Resolve Observable => HotObservable: ', resolvedHotObservable);

        if (resolvedHotObservable) {
          resolvedHotObservable.subscribe((pageData: ShowcaseShellModel) => {
            // tslint:disable-next-line:max-line-length
            console.log('ShowcaseHotObservablePage - Subscribe to HotObservable (can emmit multiple values) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
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

    // if (this.route && this.route.data) {
    //   const resolvedColdObservable = this.route.data;
    //   console.log('ShowcaseColdObservablePage - Route Resolve Observable => ColdObservable: ', resolvedColdObservable);
    //
    //   if (resolvedColdObservable) {
    //     resolvedColdObservable.subscribe(observableData => {
    //       const pageData: ShowcaseShellModel = observableData['data'];
          // tslint:disable-next-line:max-line-length
    //       console.log('ShowcaseColdObservablePage - Subscribe to ColdObservable (will emmit just one value) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
    //       if (pageData) {
    //         this.routeResolveData = pageData;
    //       }
    //     });
    //   } else {
    //     alert('No route data 2');
    //   }
    // } else {
    //   alert('No route data');
    // }
  }
}
