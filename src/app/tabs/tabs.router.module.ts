import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

import { CategoriesPage } from '../categories/categories.page';
import { FashionListingPage } from '../fashion-listing/fashion-listing.page';
import { FashionProductDetailsPage } from '../fashion-product-details/fashion-product-details.page';

import { ProfilePage } from '../profile/profile.page';

import { NotificationsPage } from '../notifications/notifications.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'categories',
        outlet: 'home',
        component: CategoriesPage
      },
      {
        path: 'fashion',
        outlet: 'home',
        component: FashionListingPage
      },
      {
        path: 'fashion/:productId',
        outlet: 'home',
        component: FashionProductDetailsPage
      },
      {
        path: 'profile',
        outlet: 'profile',
        component: ProfilePage
      },
      {
        path: 'notifications',
        outlet: 'notifications',
        component: NotificationsPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:categories)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
