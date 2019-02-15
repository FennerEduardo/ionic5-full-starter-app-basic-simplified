import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { first } from 'rxjs/operators';

import { ShowcaseService } from './showcase.service';

@Injectable()
export class ShowcaseResolver implements Resolve<any> {

  constructor(
    private showcaseService: ShowcaseService
  ) {}

  resolve() {
    return new Promise((resolve, reject) => {
      const documentObservable = this.showcaseService.shellDetails();

      documentObservable.pipe(
        first()
      ).subscribe((data: any) => {
        console.log('data - ShowcaseResolver - resolve()', data);
        resolve(documentObservable);
      });
    });
  }
}
