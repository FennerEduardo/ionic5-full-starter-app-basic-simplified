import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { first } from 'rxjs/operators';

import { RealStateService } from '../real-state.service';

@Injectable()
export class RealStateDetailsResolver implements Resolve<any> {

  constructor(
    private realStateService: RealStateService
  ) {}

  resolve() {
    return new Promise((resolve, reject) => {
      const documentObservable = this.realStateService.details();

      documentObservable.pipe(
        first()
      ).subscribe((data: any) => {
        console.log('data - RealStateDetailsResolver - resolve()', data);
        resolve(documentObservable);
      });
    });
  }
}
