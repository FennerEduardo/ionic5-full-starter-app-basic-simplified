import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(public router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl('test@test.com', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      'password': new FormControl('', Validators.required)
    });
  }

  doLogin(): void {
    console.log('do Log In');
    this.router.navigate(['app/tabs/', { outlets: {home: [ 'categories' ]} }]);
  }

  goToSignUp(): void {
    console.log('redirect to sign up page');
    this.router.navigate(['auth/signup']);
  }

  goToForgotPassword(): void {
    console.log('redirect to forgot-password page');
  }

  doFacebookLogin(): void {
    console.log('facebook login');
    this.router.navigate(['app/tabs/', { outlets: {home: [ 'categories' ]} }]);
  }
  doGoogleLogin(): void {
    console.log('google login');
    this.router.navigate(['app/tabs/', { outlets: {home: [ 'categories' ]} }]);
  }
  doTwitterLogin(): void {
    console.log('twitter login');
    this.router.navigate(['app/tabs/', { outlets: {home: [ 'categories' ]} }]);
  }

}
