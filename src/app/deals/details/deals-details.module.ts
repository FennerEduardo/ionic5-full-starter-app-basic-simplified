import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';

import { DealsDetailsPage } from './deals-details.page';
import { DealsDetailsResolver } from './deals-details.resolver';
import { DealsService } from '../deals.service';

const routes: Routes = [
  {
    path: '',
    component: DealsDetailsPage,
    resolve: {
      data: DealsDetailsResolver
    }
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
    DealsDetailsPage
  ],
  providers: [
    DealsDetailsResolver,
    DealsService
  ]
})
export class DealsDetailsPageModule {}
