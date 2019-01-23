import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

import { CategoriesPageModule } from '../categories/categories.module';
// Fashion
import { FashionListingPageModule } from '../fashion/listing/fashion-listing.module';
// Travel
import { TravelListingPageModule } from '../travel/listing/travel-listing.module';
// Food
import { FoodListingPageModule } from '../food/listing/food-listing.module';
// Deals
import { DealsListingPageModule } from '../deals/listing/deals-listing.module';
import { DealsDetailsPageModule } from '../deals/details/deals-details.module';
// Real State
import { RealStateListingPageModule } from '../real-state/listing/real-state-listing.module';
import { RealStateDetailsPageModule } from '../real-state/details/real-state-details.module';

import { UserProfilePageModule } from '../user/user-profile/user-profile.module';

import { ContactCardPageModule } from '../contact-card/contact-card.module';

import { NotificationsPageModule } from '../notifications/notifications.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,

    TabsPageRoutingModule,
    CategoriesPageModule,
    UserProfilePageModule,
    ContactCardPageModule,
    NotificationsPageModule,

    FashionListingPageModule,
    TravelListingPageModule,
    FoodListingPageModule,
    DealsListingPageModule,
    DealsDetailsPageModule,
    RealStateListingPageModule,
    RealStateDetailsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
