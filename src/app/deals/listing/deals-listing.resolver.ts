import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { first } from 'rxjs/operators';

import { DealsService } from '../deals.service';

@Injectable()
export class DealsListingResolver implements Resolve<any> {

  constructor(
    private dealsService: DealsService
  ) {}

  resolve() {
    return new Promise((resolve, reject) => {
      const documentObservable = this.dealsService.list();

      documentObservable.pipe(
        first()
      ).subscribe((data: any) => {
        console.log('data - DealsListingResolver - resolve()', data);
        resolve(documentObservable);
      });
    });
  }
}
