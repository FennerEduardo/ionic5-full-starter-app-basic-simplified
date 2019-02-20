import { Observable, ReplaySubject } from 'rxjs';
import { first, delay } from 'rxjs/operators';

import { environment } from '../../environments/environment';

export class SubjectFetch<T> {
  private _subject: ReplaySubject<T>;
  private _observable: Observable<T>;
  // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
  // However, in production you should remove this delay.
  private networkDelay = (environment && environment.shell && environment.shell.networkDelay) ? environment.shell.networkDelay : 0;
  // To debug shell styles, change configuration in the environment.ts file
  private debugMode = (environment && environment.shell && environment.shell.debug) ? environment.shell.debug : false;

  constructor(model: T, fetchData: () => Observable<T>) {
    this._subject = new ReplaySubject<T>();
    this._observable = this._subject.asObservable();

    // Send the mock
    this._subject.next(model);
    // Immediately after fetch data from endpoint
    fetchData().pipe(
      // delay(this.networkDelay),
      delay(5000),
      // Prevent the need to unsubscribe because .first() completes the observable
      first()
    ).subscribe((value: T) => {
      if (!this.debugMode) {
        this._subject.next(value);
      }
    });
  }

  public get observable(): Observable<T> {
    return this._observable;
  }
}
