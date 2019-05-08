import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FoodService } from '../food.service';

@Injectable()
export class FoodDetailsResolver implements Resolve<any> {

  constructor(private foodService: FoodService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const itemSlug = route.paramMap.get('productId');

    // Get the Shell Provider from the service
    const shellProviderObservable = this.foodService.getDetailsDataWithShell(itemSlug);

    // Resolve with Shell Provider
    const observablePromise = new Promise((resolve, reject) => {
      resolve(shellProviderObservable);
    });
    return observablePromise;
  }
}
