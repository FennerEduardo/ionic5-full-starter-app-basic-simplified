import { Component, OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';

import { IonSlides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss']
})
export class WalkthroughPage implements OnInit, AfterViewInit {
  @ViewChild(IonSlides) slides: IonSlides;
  @HostBinding('class.first-slide-active') isFirstSlide = true;
  @HostBinding('class.last-slide-active') isLastSlide = false;

  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };

  constructor(public menu: MenuController) { }

  ngOnInit(): void {
    this.menu.enable(false);
  }

  ngAfterViewInit(): void {
    // ViewChild is set
    this.slides.isBeginning().then(isBeginning => {
      this.isFirstSlide = isBeginning;
    });
    this.slides.isEnd().then(isEnd => {
      this.isLastSlide = isEnd;
    });

    // Subscribe to changes
    this.slides.ionSlideWillChange.subscribe(changes => {
      this.slides.isBeginning().then(isBeginning => {
        this.isFirstSlide = isBeginning;
      });
      this.slides.isEnd().then(isEnd => {
        this.isLastSlide = isEnd;
      });
    });
  }

  skipWalkthrough() {
    // Skip to the last slide
    this.slides.length().then(length => {
      this.slides.slideTo(length);
    });
  }
}
