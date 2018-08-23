import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  constructor(public router: Router) {
    this.signupForm = new FormGroup({
      email: new FormControl('aa@aa', Validators.required),
      password: new FormControl('test', Validators.required),
      confirm_password: new FormControl('test', Validators.required)
    });
  }

  ngOnInit() {
  }

  doSignup(): void {
    console.log('redirect to home page');
    // this.router.navigateByUrl('/app/tabs/(home:listing)');
    this.router.navigate(['app/tabs/', { outlets: {home: [ 'categories' ]} }]);
  }

}
