import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { first } from 'rxjs/operators';

import { FashionService } from '../fashion.service';

@Injectable()
export class FashionDetailsResolver implements Resolve<any> {

  constructor(
    private fashionService: FashionService
  ) {}

  resolve() {
    return new Promise((resolve, reject) => {
      const documentObservable = this.fashionService.details();

      documentObservable.pipe(
        first()
      ).subscribe((data: any) => {
        console.log('data - FashionDetailsResolver - resolve()', data);
        resolve(documentObservable);
      });
    });
  }
}
