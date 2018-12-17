import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { first } from 'rxjs/operators';

import { FoodService } from '../food.service';

@Injectable()
export class FoodListingResolver implements Resolve<any> {

  constructor(
    private foodService: FoodService
  ) {}

  resolve() {
    return new Promise((resolve, reject) => {
      const documentObservable = this.foodService.list();

      documentObservable.pipe(
        first()
      ).subscribe((data: any) => {
        console.log('data - FoodListingResolver - resolve()', data);
        resolve(documentObservable);
      });
    });
  }
}
