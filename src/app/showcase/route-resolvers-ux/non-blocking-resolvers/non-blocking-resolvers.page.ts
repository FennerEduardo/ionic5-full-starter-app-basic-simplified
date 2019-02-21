import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// You can also use a Class object as a shell model
import { ShowcaseShellModel } from '../../showcase-shell.model';

@Component({
  selector: 'app-showcase-non-blocking-resolvers',
  templateUrl: './non-blocking-resolvers.page.html',
  styleUrls: ['./non-blocking-resolvers.page.scss']
})
export class NonBlockingResolversPage implements OnInit {
  // We will assign data coming from the Route Resolver to this property
  routeResolveData: ShowcaseShellModel;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('Showcase NON Blocking Resovlers - ngOnInit()');

    if (this.route && this.route.data) {
      // We resolved a promise for the data Observable
      const promiseObservable = this.route.data;
      console.log('Showcase NON Blocking Resovlers - Route Resolve Observable => promiseObservable: ', promiseObservable);

      promiseObservable.subscribe(promiseValue => {
        const dataObservable = promiseValue['data'];
        console.log('Showcase NON Blocking Resovlers - Subscribe to promiseObservable => dataObservable: ', dataObservable);

        if (dataObservable) {
          dataObservable.subscribe(observableValue => {
            const pageData: ShowcaseShellModel = observableValue;
            // tslint:disable-next-line:max-line-length
            console.log('Showcase NON Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
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
  }
}
