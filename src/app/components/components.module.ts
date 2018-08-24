import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';
import { FillContainerComponent } from './fill-container/fill-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    CustomCheckboxComponent,
    ShowHidePasswordComponent,
    FillContainerComponent
  ],
  exports: [
    CustomCheckboxComponent,
    ShowHidePasswordComponent,
    FillContainerComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
