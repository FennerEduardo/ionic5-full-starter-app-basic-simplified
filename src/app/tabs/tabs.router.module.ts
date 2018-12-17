import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TabsPage } from './tabs.page';

import { CategoriesPage } from '../categories/categories.page';
// Fashion
import { FashionListingPage } from '../fashion/listing/fashion-listing.page';
import { FashionListingResolver } from '../fashion/listing/fashion-listing.resolver';
// Travel
import { TravelListingPage } from '../travel/listing/travel-listing.page';
import { TravelListingResolver } from '../travel/listing/travel-listing.resolver';
// Food
import { FoodListingPage } from '../food/listing/food-listing.page';
import { FoodListingResolver } from '../food/listing/food-listing.resolver';
// Deals
import { DealsListingPage } from '../deals/listing/deals-listing.page';
import { DealsListingResolver } from '../deals/listing/deals-listing.resolver';
import { DealsDetailsPage } from '../deals/details/deals-details.page';
import { DealsDetailsResolver } from '../deals/details/deals-details.resolver';
// Real State
import { RealStateListingPage } from '../real-state/listing/real-state-listing.page';
import { RealStateListingResolver } from '../real-state/listing/real-state-listing.resolver';
import { RealStateDetailsPage } from '../real-state/details/real-state-details.page';
import { RealStateDetailsResolver } from '../real-state/details/real-state-details.resolver';

import { ProfilePage } from '../profile/profile.page';

import { NotificationsPage } from '../notifications/notifications.page';
import { NotificationsResolver } from '../notifications/notifications.resolver';
import { NotificationsService } from '../notifications/notifications.service';

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
        component: FashionListingPage,
        resolve: {
          data: FashionListingResolver
        }
      },
      {
        path: 'travel',
        outlet: 'home',
        component: TravelListingPage,
        resolve: {
          data: TravelListingResolver
        }
      },
      {
        path: 'food',
        outlet: 'home',
        component: FoodListingPage,
        resolve: {
          data: FoodListingResolver
        }
      },
      {
        path: 'deals',
        outlet: 'home',
        component: DealsListingPage,
        resolve: {
          data: DealsListingResolver
        }
      },
      {
        path: 'deals/:productId',
        outlet: 'home',
        component: DealsDetailsPage,
        resolve: {
          data: DealsDetailsResolver
        }
      },
      {
        path: 'real-state',
        outlet: 'home',
        component: RealStateListingPage,
        resolve: {
          data: RealStateListingResolver
        }
      },
      {
        path: 'real-state/:productId',
        outlet: 'home',
        component: RealStateDetailsPage,
        resolve: {
          data: RealStateDetailsResolver
        }
      },
      {
        path: 'profile',
        outlet: 'profile',
        component: ProfilePage
      },
      {
        path: 'notifications',
        outlet: 'notifications',
        component: NotificationsPage,
        resolve: {
         data: NotificationsResolver,
       }
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
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [
    FashionListingResolver,
    TravelListingResolver,
    FoodListingResolver,
    DealsListingResolver,
    RealStateListingResolver,

    NotificationsResolver,
    NotificationsService
  ]
})
export class TabsPageRoutingModule {}
