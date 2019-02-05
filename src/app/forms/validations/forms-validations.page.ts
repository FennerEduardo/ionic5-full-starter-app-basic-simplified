import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { UsernameValidator } from '../../validators/username.validator';
import { PasswordValidator } from '../../validators/password.validator';
import { PhoneValidator } from '../../validators/phone.validator';

import { CountryPhone } from './country-phone.model';


@Component({
  selector: 'forms-validations-page',
  templateUrl: './forms-validations.page.html',
  styleUrls: ['./forms-validations.page.scss'],
})
export class FormsValidationsPage implements OnInit {

  validationsForm: FormGroup;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;
  countries: Array<CountryPhone>;
  genders: Array<string>;

  validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      { type: 'usernameNotAvailable', message: 'Your username has already been taken.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'invalidCountryPhone', message: 'Phone incorrect for the country selected' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' }
    ],
    'matching_passwords': [
      { type: 'areNotEqual', message: 'Password mismatch' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };

  constructor() { }

  ngOnInit() {
    this.countries = [
      new CountryPhone('UY', 'Uruguay'),
      new CountryPhone('US', 'United States'),
      new CountryPhone('AR', 'Argentina')
    ];

    this.genders = [
      'Male',
      'Female'
    ];

    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areNotEqual(formGroup);
    });

    const country = new FormControl(this.countries[0], Validators.required);

    const phone = new FormControl('', Validators.compose([
      Validators.required,
      PhoneValidator.invalidCountryPhone(country)
    ]));
    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    this.validationsForm = new FormGroup({
      'username': new FormControl('', Validators.compose([
        UsernameValidator.usernameNotAvailable,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      'name': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'gender': new FormControl(this.genders[0], Validators.required),
      'country_phone': this.country_phone_group,
      'matching_passwords': this.matching_passwords_group,
      'terms': new FormControl(true, Validators.pattern('true'))
    });
  }

  onSubmit(values) {
    console.log(values);
  }

}
