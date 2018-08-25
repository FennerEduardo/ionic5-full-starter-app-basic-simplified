import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

import { CategoriesPageModule } from '../categories/categories.module';
import { FashionListingPageModule } from '../fashion-listing/fashion-listing.module';
import { FashionProductDetailsModule } from '../fashion-product-details/fashion-product-details.module';

import { ContactPageModule } from '../contact/contact.module';

import { AboutPageModule } from '../about/about.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    CategoriesPageModule,
    FashionListingPageModule,
    FashionProductDetailsModule,
    AboutPageModule,
    ContactPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
