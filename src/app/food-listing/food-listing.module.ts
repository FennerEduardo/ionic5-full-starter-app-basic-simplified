import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { FloorPipe } from 'angular-pipes';

import { ComponentsModule } from '../components/components.module';

import { FoodListingPage } from './food-listing.page';
import { FoodListingResolver } from './food-listing.resolver';
import { FoodService } from './food.service';

const routes: Routes = [
  {
    path: '',
    component: FoodListingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [
    FoodListingPage,
    FloorPipe
  ],
  providers: [
    FoodListingResolver,
    FoodService
  ]
})
export class FoodListingPageModule {}
