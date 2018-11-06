import { Observable, ReplaySubject } from 'rxjs';
import { first, delay } from 'rxjs/operators';

export class SubjectFetch<T> {
  private _subject: ReplaySubject<T>;
  private _observable: Observable<T>;

  constructor(model: T, fetchData: () => Observable<T>) {
    this._subject = new ReplaySubject<T>();
    this._observable = this._subject.asObservable();

    // Send the mock
    this._subject.next(model);
    // Immediately after fetch data from endpoint
    fetchData().pipe(
      delay(2000),
      // Prevent the need to unsubscribe.
      // Q: Agustin: Is this because .first() completes the observable?
      first()
    ).subscribe((value: T) => {
      this._subject.next(value);
    });
  }

  public get observable(): Observable<T> {
    return this._observable;
  }
}
