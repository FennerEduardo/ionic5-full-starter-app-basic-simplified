import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FloorPipe } from 'angular-pipes';

import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';
import { FillContainerComponent } from './fill-container/fill-container.component';
import { TextShellComponent } from './text-shell/text-shell.component';
import { PreloadImageComponent } from './preload-image/preload-image.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { RatingInputComponent } from './rating-input/rating-input.component';
import { ColorRadioDirective } from './color-radio/color-radio.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    FloorPipe,
    CustomCheckboxComponent,
    ShowHidePasswordComponent,
    FillContainerComponent,
    TextShellComponent,
    PreloadImageComponent,
    BackgroundImageComponent,
    CountdownTimerComponent,
    CounterInputComponent,
    RatingInputComponent,
    ColorRadioDirective
  ],
  exports: [
    FloorPipe,
    CustomCheckboxComponent,
    ShowHidePasswordComponent,
    FillContainerComponent,
    TextShellComponent,
    PreloadImageComponent,
    BackgroundImageComponent,
    CountdownTimerComponent,
    CounterInputComponent,
    RatingInputComponent,
    ColorRadioDirective
  ],
  entryComponents: [],
})
export class ComponentsModule {}
