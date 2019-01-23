import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { first } from 'rxjs/operators';
import { ProfileService } from './profile.service';

@Injectable()
export class ProfileResolver implements Resolve<any> {

  constructor(private profileService: ProfileService) { }

  resolve() {
    return new Promise((resolve, reject) => {
      const documentObservable = this.profileService.getData();

      documentObservable.pipe(
        first()
      ).subscribe((data: any) => {
        console.log('data - ProfileRsolver - resolve()', data);
        resolve(documentObservable);
      });
    });
  }
}
