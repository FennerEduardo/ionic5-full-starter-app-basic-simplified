import { Component, ViewEncapsulation, Input, HostBinding, PLATFORM_ID, Inject, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subject, interval } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

// When fixed, uncomment this
// import * as dayjs from 'dayjs';
import * as _dayjs from 'dayjs';

// TODO:  dayjs esta tirando este ERROR:
//        error TS2339: Property 'to' does not exist on type 'Dayjs'.
// Por suerte ya hay un PR que lo soluciona (https://github.com/iamkun/dayjs/issues/297#issuecomment-442748858)
// When fixed, remove this
const dayjs: any = _dayjs;

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: [
    './countdown-timer.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  _endingTime: any;
  _initialUnit = 'hour';

  _updateInterval: Observable<any> = interval(1000);
  private _unsubscribeSubject: Subject<void> = new Subject();

  _daysLeft: number;
  _hoursLeft: number;
  _minutesLeft: number;
  _secondsLeft: number;

  // DIVISORS
  // 60 seconds * 60 (minutes) * 24 (hours) = 86400 seconds = 1 day
  _dayDivisor = (60 * 60 * 24);
  // 60 seconds * 60 (minutes) = 3600 seconds = 1 hour
  _hourDivisor = (60 * 60);
  // 60 seconds = 1 minute
  _minuteDivisor = 60;
  _secondDivisor = 1;

  // MODULUS
  // Neutral modulus
  _dayModulus = (secondsLeft) => secondsLeft;
  // The modulus operator (%) returns the division remainder.
  // To figure out how many hours are left after taking in consideration the days, we should do:
  //    (secondsLeft % hourModulus) / hourDivisor
  // In 1 day there are 86400 seconds, and in 1 hour 3600 seconds. 1 day + 1 hour = 90000 seconds
  //    (90000s % 86400s) / 3600s = 1h
  _hourModulus = (secondsLeft) => (secondsLeft % this._dayDivisor);
  _minuteModulus = (secondsLeft) => (secondsLeft % this._hourDivisor);
  _secondModulus = (secondsLeft) => (secondsLeft % this._minuteDivisor);

  @Input()
  set end(endingTime: string) {
    this._endingTime = (endingTime !== undefined && endingTime !== null) ? dayjs(endingTime) : dayjs();
  }

  @Input()
  set unit(initialUnit: string) {
    // 'day', 'hour, 'minute'
    this._initialUnit = (initialUnit !== undefined && initialUnit !== null) ? initialUnit : 'hour';

    // Adjust modulus depending on the unit
    if (this._initialUnit === 'hour') {
      // Cancelation modulus
      this._dayModulus = (secondsLeft) => 1;
      // Neutral modulus
      this._hourModulus = (secondsLeft) => secondsLeft;
    }

    if (this._initialUnit === 'minute') {
      // Cancelation modulus
      this._dayModulus = (secondsLeft) => 1;
      this._hourModulus = (secondsLeft) => 1;
      // Neutral modulus
      this._minuteModulus = (secondsLeft) => secondsLeft;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this._updateInterval.pipe(takeUntil(this._unsubscribeSubject)).subscribe(
      (val) => {
        const secondsLeft = this._endingTime.diff(dayjs(), 'second');

        this._daysLeft = Math.floor(this._dayModulus(secondsLeft) / this._dayDivisor);
        this._hoursLeft = Math.floor(this._hourModulus(secondsLeft) / this._hourDivisor);
        this._minutesLeft = Math.floor(this._minuteModulus(secondsLeft) / this._minuteDivisor);
        this._secondsLeft = Math.floor(this._secondModulus(secondsLeft) / this._secondDivisor);
      },
      (error) => console.error(error),
      () => console.log('[takeUntil] complete')
    );
  }

  ngOnDestroy(): void {
    this._unsubscribeSubject.next();
    this._unsubscribeSubject.complete();
  }
}
