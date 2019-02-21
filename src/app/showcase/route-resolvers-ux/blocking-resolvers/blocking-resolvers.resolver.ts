import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ReplaySubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { ShowcaseService } from '../../showcase.service';

@Injectable()
export class BlockingResolversResolver implements Resolve<any> {

  constructor(
    private showcaseService: ShowcaseService
  ) {}

  resolve() {
    // Base Observable (where we get data from)
    const baseObservable = this.showcaseService.coldObservableDetails();

    // BLOCKING RESOLVERS

    // Basic Resolver that returns the base Observable
    return baseObservable;
  }
}
