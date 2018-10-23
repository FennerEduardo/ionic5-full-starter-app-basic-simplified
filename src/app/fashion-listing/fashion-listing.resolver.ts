import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { first, delay } from 'rxjs/operators';

import { FashionService } from './fashion.service';

@Injectable()
// export class FashionListingResolver implements Resolve<Promise<Observable<any>>> {
export class FashionListingResolver implements Resolve<any> {

  constructor(
    private fashionService: FashionService
  ) {}

  // getObservable(): Observable<any> {
  //   return new Observable(observer => {
  //     observer.next('starting');
  //     setInterval(() => {
  //       console.log(new Date().toString());
  //       debugger;
  //       observer.next(new Date().toString());
  //     }, 5000);
  //   });
  // }

  resolve() {
    // return of('Hello Alligator!').pipe(
    //   delay(3000)
    // );

    return new Promise((resolve, reject) => {
      const documentObservable = this.fashionService.list();
      // debugger;
      documentObservable.pipe(
        // delay(5000),
        first()
      ).subscribe((data: any) => {
        console.log('data - FashionListingResolver - resolve()', data);
        // debugger;
        resolve(documentObservable);
      });
    });
  }
}
