import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})

export class ForgotPasswordPage {
  forgotPasswordForm: FormGroup;

  constructor(public router: Router) {
    this.forgotPasswordForm = new FormGroup({
      'email': new FormControl('test@test.com', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])
    });
  }

  recoverPassword() {
    console.log(this.forgotPasswordForm.value);
    this.router.navigate(['app/tabs/', { outlets: {home: [ 'categories' ]} }]);
  }

}
