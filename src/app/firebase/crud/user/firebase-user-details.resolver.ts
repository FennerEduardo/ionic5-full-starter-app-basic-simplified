import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseCrudService } from '../firebase-crud.service';

@Injectable()
export class FirebaseUserDetailsResolver implements Resolve<any> {

  constructor(private firebaseCrudService: FirebaseCrudService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const userId = route.paramMap.get('id');

    return this.firebaseCrudService.getUserDetailsData(userId);
  }
}
