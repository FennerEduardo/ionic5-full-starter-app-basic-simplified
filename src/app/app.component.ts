import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    './side-menu/styles/side-menu.scss',
    './side-menu/styles/side-menu.shell.scss',
    './side-menu/styles/side-menu.responsive.scss'
  ]
})
export class AppComponent {
  appPages = [
   {
     title: 'Categories',
     url: '/app/categories',
     ionicIcon: 'list-outline'
   },
   {
     title: 'Profile',
     url: '/app/user',
     ionicIcon: 'person-outline'
   },
   {
     title: 'Contact Card',
     url: '/contact-card',
     customIcon: './assets/custom-icons/side-menu/contact-card.svg'
   },
   {
     title: 'Notifications',
     url: '/app/notifications',
     ionicIcon: 'notifications-outline'
   }
 ];
 accountPages = [
   {
     title: 'Log In',
     url: '/auth/login',
     ionicIcon: 'log-in-outline'
   },
   {
     title: 'Sign Up',
     url: '/auth/signup',
     ionicIcon: 'person-add-outline'
   },
   {
     title: 'Tutorial',
     url: '/walkthrough',
     ionicIcon: 'school-outline'
   },
   {
     title: 'Getting Started',
     url: '/getting-started',
     ionicIcon: 'rocket-outline'
   },
   {
     title: '404 page',
     url: '/page-not-found',
     ionicIcon: 'alert-circle-outline'
   }
 ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
