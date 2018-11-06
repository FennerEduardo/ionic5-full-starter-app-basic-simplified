import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/walkthrough', pathMatch: 'full' },
  { path: 'walkthrough', loadChildren: './walkthrough/walkthrough.module#WalkthroughPageModule' },
  { path: 'getting-started', loadChildren: './getting-started/getting-started.module#GettingStartedPageModule' },
  { path: 'auth/login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'auth/signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'forms', loadChildren: './forms/forms.module#FormsPageModule' },
  { path: 'layouts', loadChildren: './layouts/layouts.module#LayoutsPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
