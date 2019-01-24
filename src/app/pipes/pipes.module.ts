import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FloorPipe } from 'angular-pipes';

import { TimeDifferencePipe } from './time-difference.pipe';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    FloorPipe,
    TimeDifferencePipe,
    TimeAgoPipe
  ],
  exports: [
    FloorPipe,
    TimeDifferencePipe,
    TimeAgoPipe
  ],
  entryComponents: [],
})
export class PipesModule {}
