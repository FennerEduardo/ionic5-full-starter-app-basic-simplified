import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { first } from 'rxjs/operators';
import { UserService } from '../user.service';

@Injectable()
export class UserProfileResolver implements Resolve<any> {

  constructor(private userService: UserService) { }

  resolve() {
    return new Promise((resolve, reject) => {
      const documentObservable = this.userService.getProfileData();

      documentObservable.pipe(
        first()
      ).subscribe((data: any) => {
        console.log('data - ProfileRsolver - resolve()', data);
        resolve(documentObservable);
      });
    });
  }
}
