import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FashionProductDetailsPage } from './fashion-product-details.page';

const fashionProductDetailsRoutes: Routes = [
  {
    path: '',
    component: FashionProductDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(fashionProductDetailsRoutes)
  ],
  declarations: [FashionProductDetailsPage]
})
export class FashionProductDetailsModule {}
