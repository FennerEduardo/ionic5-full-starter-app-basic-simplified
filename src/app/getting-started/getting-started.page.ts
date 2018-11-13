import { Component, ViewEncapsulation, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Slides } from '@ionic/angular';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.page.html',
  styleUrls: ['./getting-started.page.scss'],
  // encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.ShadowDom
})
export class GettingStartedPage implements OnInit, AfterViewInit {
  isLastSlide = false;
  gettingStartedForm: FormGroup;
  @ViewChild(Slides) slides: Slides;

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

  ngOnInit() { }

  ngAfterViewInit() {
    // ViewChild is set
    // Subscribe to changes
    this.slides.ionSlideWillChange.subscribe(changes => {
      this.slides.isEnd().then(isEnd => {
        this.isLastSlide = isEnd;
      });
    });
  }
}
