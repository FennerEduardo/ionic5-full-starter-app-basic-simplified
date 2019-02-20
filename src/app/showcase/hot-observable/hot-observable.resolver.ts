import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { first } from 'rxjs/operators';

import { ShowcaseService } from '../showcase.service';

@Injectable()
export class HotObservableResolver implements Resolve<any> {

  constructor(
    private showcaseService: ShowcaseService
  ) {}

  resolve() {
    // Base Observable (where we get data from)
    const baseObservable = this.showcaseService.coldObservableDetails();

    // NON-BLOCKING RESOLVERS

    // Resolver using a ReplySubject that emits the base Observable and then completes
    // const subject = new ReplaySubject();
    // subject.next(baseObservable);
    // subject.complete();
    // return subject;

    // Resolver using an Observable that emits the base Observable and then completes
    // const observable = Observable.create((observer) => {
    //   observer.next(baseObservable);
    //   observer.complete();
    // });
    // return observable;

    // Resolver using a Promise that resolves the base Observable
    // const observablePromise = new Promise((resolve, reject) => {
    //   resolve(baseObservable);
    // });
    // return observablePromise;

    // Resolve with Shell Provider
    const observablePromise = new Promise((resolve, reject) => {
      // Get the Shell Provider from the service
      const shellProviderObservable = this.showcaseService.getDataWithShell();
      resolve(shellProviderObservable);
    });
    return observablePromise;

    // TODO: clean this code
    // return new Promise((resolve, reject) => {
    //   const hotObservable = this.showcaseService.hotObservableDetails();
    //
    //   hotObservable.pipe(
    //     // Force an immediate transition. first() will emit the first value,
    //     // and in our Hot Observable implementation, the first value is a shell model.
    //     // Resolving the shell model is immediate and doesn't depend on how long it takes the server to fetch data.
    //     first()
    //   ).subscribe((immediateData: any) => {
        // tslint:disable-next-line:max-line-length
    //     console.log('HotObservableResolver - Subscribe to HotObservable (will emit only one value as we used a first() filter)', immediateData);
    //
    //     // Forget about the resolved data (immediateData), we won't use it here.
    //     // Just resolve the original Hot Observable for the page to handle it.
    //     resolve(hotObservable);
    //   });
    // });
  }
}
