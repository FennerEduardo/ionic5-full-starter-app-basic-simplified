import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';

import { AppShellPage } from './app-shell/showcase-shell.page';
import { CustomComponentsPage } from './custom-components/showcase-custom-components.page';

const showcaseRoutes: Routes = [
  {
    path: 'app-shell',
    component: AppShellPage
  },
  {
    path: 'custom-components',
    component: CustomComponentsPage
  },
  {
    path: 'route-resolvers-ux',
    loadChildren: './route-resolvers-ux/showcase-route-resolvers-ux.module#ShowcaseRouteResolversUXModule'
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(showcaseRoutes),
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [ AppShellPage, CustomComponentsPage ]
})
export class ShowcasePageModule {}
