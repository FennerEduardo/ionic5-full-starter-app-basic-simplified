import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(public router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('aa@aa', Validators.required),
      password: new FormControl('test', Validators.required)
    });
  }

  ngOnInit() {
  }

  doLogin(): void {
    console.log('redirect to home page');
    // this.router.navigateByUrl('/app/tabs/(home:listing)');
    this.router.navigate(['app/tabs/', { outlets: {home: [ 'listing' ]} }]);
  }

}
