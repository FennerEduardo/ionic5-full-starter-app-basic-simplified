import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { RouteResovlersUXPage } from './showcase-route-resolvers-ux.page';

import { NonBlockingResolversPage } from './non-blocking-resolvers/non-blocking-resolvers.page';
import { BlockingResovlersPage } from './blocking-resolvers/blocking-resolvers.page';
import { ProgressiveShellResovlersPage } from './progressive-shell-resolvers/progressive-shell-resolvers.page';

import { NonBlockingResolversResolver } from './non-blocking-resolvers/non-blocking-resolvers.resolver';
import { BlockingResolversResolver } from './blocking-resolvers/blocking-resolvers.resolver';
import { ProgressiveShellResolversResolver } from './progressive-shell-resolvers/progressive-shell-resolvers.resolver';

import { ShowcaseService } from '../showcase.service';

const routes: Routes = [
  {
    path: '',
    component: RouteResovlersUXPage
  },
  {
    path: 'non-blocking-resolvers',
    component: NonBlockingResolversPage,
    resolve: {
      data: NonBlockingResolversResolver
    }
  },
  {
    path: 'blocking-resolvers',
    component: BlockingResovlersPage,
    resolve: {
      data: BlockingResolversResolver
    }
  },
  {
    path: 'progressive-shell-resolvers',
    component: ProgressiveShellResovlersPage,
    resolve: {
      data: ProgressiveShellResolversResolver
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
    NonBlockingResolversPage,
    BlockingResovlersPage,
    ProgressiveShellResovlersPage,
    RouteResovlersUXPage
  ],
  providers: [
    ShowcaseService,
    ProgressiveShellResolversResolver,
    NonBlockingResolversResolver,
    BlockingResolversResolver
  ]
})
export class ShowcaseRouteResolversUXModule {}
