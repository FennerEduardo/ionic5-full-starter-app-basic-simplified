import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { first } from 'rxjs/operators';

import { TravelService } from '../travel.service';

@Injectable()
export class TravelDetailsResolver implements Resolve<any> {

  constructor(
    private travelService: TravelService
  ) {}

  resolve() {
    return new Promise((resolve, reject) => {
      const documentObservable = this.travelService.details();

      documentObservable.pipe(
        first()
      ).subscribe((data: any) => {
        console.log('data - TravelDetailsResolver - resolve()', data);
        resolve(documentObservable);
      });
    });
  }
}
