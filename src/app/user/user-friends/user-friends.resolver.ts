import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { first } from 'rxjs/operators';
import { UserService } from '../user.service';

@Injectable()
export class UserFriendsResolver implements Resolve<any> {

  constructor(private userService: UserService) { }

  resolve() {
    return new Promise((resolve, reject) => {
      const documentObservable = this.userService.getFriendsData();

      documentObservable.pipe(
        first()
      ).subscribe((data: any) => {
        console.log('data - UserFriendsRsolver - resolve()', data);
        resolve(documentObservable);
      });
    });
  }
}
