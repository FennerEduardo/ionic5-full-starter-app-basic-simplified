import { Pipe, PipeTransform } from '@angular/core';

// When fixed, uncomment this
// import * as dayjs from 'dayjs';
import * as _dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// TODO:  dayjs esta tirando este ERROR:
//        error TS2339: Property 'to' does not exist on type 'Dayjs'.
// Por suerte ya hay un PR que lo soluciona (https://github.com/iamkun/dayjs/issues/297#issuecomment-442748858)
// When fixed, remove this
const dayjs: any = _dayjs;

@Pipe({ name: 'appTimeAgo' })
export class TimeAgoPipe implements PipeTransform {
  transform(value: any): string {
    dayjs.extend(relativeTime);
    let timeAgo = '';
    const prependText = (dayjs(value).diff(dayjs(), 'day') < 0) ? 'Ended' : 'Ends';

    if (value) {
      timeAgo = prependText + ' ' + dayjs().to(dayjs(value));
    }

    return timeAgo;
  }
}
