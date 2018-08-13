import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // RouterModule.forChild([{ path: '', component: HomePage }])
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
