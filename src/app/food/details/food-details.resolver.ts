import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { first } from 'rxjs/operators';

import { FoodService } from '../food.service';

@Injectable()
export class FoodDetailsResolver implements Resolve<any> {

  constructor(
    private foodService: FoodService
  ) {}

  resolve() {
    return new Promise((resolve, reject) => {
      const documentObservable = this.foodService.details();

      documentObservable.pipe(
        first()
      ).subscribe((data: any) => {
        console.log('data - FoodDetailsResolver - resolve()', data);
        resolve(documentObservable);
      });
    });
  }
}
