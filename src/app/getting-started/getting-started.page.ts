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
  radioTagsForm: FormGroup;
  customCheckboxForm: FormGroup;

  constructor() {
    this.radioTagsForm = new FormGroup({
      selected_option: new FormControl('kids')
    });

    this.customCheckboxForm = new FormGroup({
      _1: new FormControl(true),
      _2: new FormControl(false),
      _3: new FormControl(false),
      _4: new FormControl(true)
    });
  }

  ngOnInit() {
  }

}
