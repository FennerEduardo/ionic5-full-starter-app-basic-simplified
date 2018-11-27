import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { first } from 'rxjs/operators';

import { RealStateService } from './real-state.service';

@Injectable()
export class RealStateListingResolver implements Resolve<any> {

  constructor(
    private realStateService: RealStateService
  ) {}

  resolve() {
    return new Promise((resolve, reject) => {
      const documentObservable = this.realStateService.list();

      documentObservable.pipe(
        first()
      ).subscribe((data: any) => {
        console.log('data - RealStateListingResolver - resolve()', data);
        resolve(documentObservable);
      });
    });
  }
}
