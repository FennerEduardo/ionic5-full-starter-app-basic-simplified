import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

import { CategoriesPageModule } from '../categories/categories.module';
import { FashionListingPageModule } from '../fashion-listing/fashion-listing.module';
import { TravelListingPageModule } from '../travel-listing/travel-listing.module';
import { FoodListingPageModule } from '../food-listing/food-listing.module';
import { DealsListingPageModule } from '../deals-listing/deals-listing.module';
import { RealStateListingPageModule } from '../real-state-listing/real-state-listing.module';

import { ProfilePageModule } from '../profile/profile.module';

import { NotificationsPageModule } from '../notifications/notifications.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,

    TabsPageRoutingModule,
    CategoriesPageModule,
    ProfilePageModule,
    NotificationsPageModule,

    FashionListingPageModule,
    TravelListingPageModule,
    FoodListingPageModule,
    DealsListingPageModule,
    RealStateListingPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
