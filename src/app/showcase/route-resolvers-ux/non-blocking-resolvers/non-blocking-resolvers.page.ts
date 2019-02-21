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
    console.log('ShowcaseHotObservablePage - ngOnInit()');

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
  }
}
