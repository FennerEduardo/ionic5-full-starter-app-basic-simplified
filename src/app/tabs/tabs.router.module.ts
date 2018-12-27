import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TabsPage } from './tabs.page';

import { FashionListingResolver } from '../fashion/listing/fashion-listing.resolver';
import { TravelListingResolver } from '../travel/listing/travel-listing.resolver';
import { FoodListingResolver } from '../food/listing/food-listing.resolver';
import { DealsListingResolver } from '../deals/listing/deals-listing.resolver';
import { DealsDetailsResolver } from '../deals/details/deals-details.resolver';
import { RealStateListingResolver } from '../real-state/listing/real-state-listing.resolver';
import { RealStateDetailsResolver } from '../real-state/details/real-state-details.resolver';
import { NotificationsResolver } from '../notifications/notifications.resolver';
import { NotificationsService } from '../notifications/notifications.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: '../categories/categories.module#CategoriesPageModule'
          }
        ]
      },
      {
        path: 'fashion',
        children: [
          {
            path: '',
            loadChildren: '../fashion/listing/fashion-listing.module#FashionListingPageModule'
          }
        ],
        resolve: {
          data: FashionListingResolver
        }
      },
      {
        path: 'travel',
        children: [
          {
            path: '',
            loadChildren: '../travel/listing/travel-listing.module#TravelListingPageModule'
          }
        ],
        resolve: {
          data: TravelListingResolver
        }
      },
      {
        path: 'food',
        children: [
          {
            path: '',
            loadChildren: '../food/listing/food-listing.module#FoodListingPageModule'
          }
        ],
        resolve: {
          data: FoodListingResolver
        }
      },
      {
        path: 'deals',
        children: [
          {
            path: '',
            loadChildren: '../deals/listing/deals-listing.module#DealsListingPageModule'
          }
        ],
        resolve: {
          data: DealsListingResolver
        }
      },
      {
        path: 'deals/:productId',
        children: [
          {
            path: '',
            loadChildren: '../deals/details/deals-details.module#DealsDetailsPageModule'
          }
        ],
        resolve: {
          data: DealsDetailsResolver
        }
      },
      {
        path: 'real-state',
        children: [
          {
            path: '',
            loadChildren: '../real-state/listing/real-state-listing.module#RealStateListingPageModule'
          }
        ],
        resolve: {
          data: RealStateListingResolver
        }
      },
      {
        path: 'real-state/:productId',
        children: [
          {
            path: '',
            loadChildren: '../real-state/details/real-state-details.module#RealStateDetailsPageModule'
          }
        ],
        resolve: {
          data: RealStateDetailsResolver
        }
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: '../notifications/notifications.module#NotificationsPageModule'
          }
        ],
        resolve: {
         data: NotificationsResolver
        }
      },
      {
        path: '',
        redirectTo: 'app/tabs/categories',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app/tabs/categories',
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
