import { Pipe, PipeTransform } from '@angular/core';

// When fixed, uncomment this
// import * as dayjs from 'dayjs';
import * as _dayjs from 'dayjs';

// TODO:  dayjs esta tirando este ERROR:
//        error TS2339: Property 'to' does not exist on type 'Dayjs'.
// Por suerte ya hay un PR que lo soluciona (https://github.com/iamkun/dayjs/issues/297#issuecomment-442748858)
// When fixed, remove this
const dayjs: any = _dayjs;

@Pipe({ name: 'appTimeDifference' })
export class TimeDifferencePipe implements PipeTransform {
  transform(value: any): number {
    return dayjs(value).diff(dayjs(), 'day');
  }
}
