import { FormControl } from '@angular/forms';

export class CounterValidator {

  // static counterRangeValidator(fc: FormControl) {
  //
  //   if (fc.value.toLowerCase() === 'abc123' || fc.value.toLowerCase() === '123abc') {
  //     return {
  //       validUsername: true
  //     };
  //   } else {
  //     return null;
  //   }
  // }
  // export function counterRangeValidator(maxValue, minValue) {
  //   return (c: FormControl) => {
  //     const err = {
  //       rangeError: {
  //         given: c.value,
  //         max: maxValue || 10,
  //         min: minValue || 0
  //       }
  //     };
  //
  //     return (c.value > +maxValue || c.value < +minValue) ? err : null;
  //   };
  // }

}

// export function counterRangeValidator(maxValue, minValue) {
//   return (c: FormControl) => {
//     const err = {
//       rangeError: {
//         given: c.value,
//         max: maxValue || 10,
//         min: minValue || 0
//       }
//     };
//
//     return (c.value > +maxValue || c.value < +minValue) ? err : null;
//   };
// }
