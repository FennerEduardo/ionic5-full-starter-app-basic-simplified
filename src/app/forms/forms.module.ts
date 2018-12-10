import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO: move to a shared module instead
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormsPage } from './forms.page';

const routes: Routes = [
  {
    path: '',
    component: FormsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormsPage]
})
export class FormsPageModule {}
