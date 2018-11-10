import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.page.html',
  styleUrls: ['./getting-started.page.scss'],
  // encapsulation: ViewEncapsulation.None
  // TODO: when updating to Angular 6.1 un-comment this
  // encapsulation: ViewEncapsulation.ShadowDom // introduced in Angular 6.1 (Shadow Dom v1)
  // encapsulation: ViewEncapsulation.Native // deprecated in Angular 6.1+ (Shadow Dom v0)
})
export class GettingStartedPage implements OnInit {
  // radioTagsForm: FormGroup;
  // customCheckboxForm: FormGroup;
  gettingStartedForm: FormGroup;

  constructor() {
    this.gettingStartedForm = new FormGroup({
      browsingCategory: new FormControl('kids'),
      followingInterests: new FormGroup({
        tops: new FormControl(true),
        dresses: new FormControl(false),
        jeans: new FormControl(false),
        jackets: new FormControl(true),
        shoes: new FormControl(false),
        glasses: new FormControl(true)
      })
    });
  }

  ngOnInit() {
  }

}
