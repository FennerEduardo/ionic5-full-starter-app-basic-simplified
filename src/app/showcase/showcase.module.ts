import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from '../components/components.module';

import { ShowcasePage } from './showcase.page';
import { ShowcaseResolver } from './showcase.resolver';
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
        component: ShowcasePage,
        resolve: {
          data: ShowcaseResolver
        }
      }
    ])
  ],
  declarations: [ ShowcasePage ],
  providers: [
    ShowcaseResolver,
    ShowcaseService
  ]
})
export class ShowcaseModule {}
