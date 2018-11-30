import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../components/components.module';

import { TimeDifferencePipe } from '../utils/time-difference.pipe';
import { TimeAgoPipe } from '../utils/time-ago.pipe';

import { DealsListingPage } from './deals-listing.page';
import { DealsListingResolver } from './deals-listing.resolver';
import { DealsService } from './deals.service';

const routes: Routes = [
  {
    path: '',
    component: DealsListingPage
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
    DealsListingPage,
    TimeDifferencePipe,
    TimeAgoPipe
  ],
  providers: [
    DealsListingResolver,
    DealsService
  ]
})
export class DealsListingPageModule {}
