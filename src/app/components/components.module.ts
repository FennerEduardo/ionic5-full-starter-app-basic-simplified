import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';

import { FillContainerComponent } from './fill-container/fill-container.component';
import { PreloadImageComponent } from './preload-image/preload-image.component';
import { BackgroundImageComponent } from './background-image/background-image.component';

import { AspectRatioComponent } from './aspect-ratio/aspect-ratio.component';
import { TextShellComponent } from './text-shell/text-shell.component';
import { ImageShellComponent } from './image-shell/image-shell.component';

import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { RatingInputComponent } from './rating-input/rating-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    CustomCheckboxComponent,
    ShowHidePasswordComponent,

    FillContainerComponent,
    PreloadImageComponent,
    BackgroundImageComponent,

    AspectRatioComponent,
    TextShellComponent,
    ImageShellComponent,

    CountdownTimerComponent,
    CounterInputComponent,
    RatingInputComponent
  ],
  exports: [
    CustomCheckboxComponent,
    ShowHidePasswordComponent,

    FillContainerComponent,
    PreloadImageComponent,
    BackgroundImageComponent,

    AspectRatioComponent,
    TextShellComponent,
    ImageShellComponent,

    CountdownTimerComponent,
    CounterInputComponent,
    RatingInputComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
