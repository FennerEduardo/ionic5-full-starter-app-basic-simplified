import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    CustomCheckboxComponent
  ],
  exports: [
    CustomCheckboxComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
