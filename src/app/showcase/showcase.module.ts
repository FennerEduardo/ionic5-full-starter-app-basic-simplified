import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from '../components/components.module';

import { ShowcasePage } from './showcase.page';

import { ShowcaseHotObservablePage } from './hot-observable/hot-observable.page';
import { HotObservableResolver } from './hot-observable/hot-observable.resolver';
import { ShowcaseColdObservablePage } from './cold-observable/cold-observable.page';
import { ColdObservableResolver } from './cold-observable/cold-observable.resolver';

import { ShowcaseService } from './showcase.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShowcasePage
      },
      {
        path: 'hot-observable',
        component: ShowcaseHotObservablePage,
        resolve: {
          data: HotObservableResolver
        }
      },
      {
        path: 'cold-observable',
        component: ShowcaseColdObservablePage,
        resolve: {
          data: ColdObservableResolver
        }
      }
    ])
  ],
  declarations: [
    ShowcasePage,
    ShowcaseHotObservablePage,
    ShowcaseColdObservablePage
  ],
  providers: [
    HotObservableResolver,
    ColdObservableResolver,
    ShowcaseService
  ]
})
export class ShowcaseModule {}
