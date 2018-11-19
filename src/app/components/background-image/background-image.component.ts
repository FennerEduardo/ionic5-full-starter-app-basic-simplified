import { Component, Input, ElementRef, Renderer2, ViewEncapsulation, OnChanges, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: [
    './background-image.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class BackgroundImageComponent implements OnChanges {
  _src = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {}

  @Input() set src(val: string) {
    this._src = (val !== undefined && val !== null) ? val : '';
  }

  ngOnChanges() {
    this._update();
  }

  _update() {
    // When using ssr (server Side Rendering), avoid the loading animation while the browser loads the image resource
    if (isPlatformServer(this.platformId)) {
      this._loaded(true);
    } else {
      this._loaded(false);
    }
  }

  _loaded(isLoaded: boolean) {
    if (isLoaded) {
      this._renderer.setStyle(this._elementRef.nativeElement, 'backgroundImage', 'url(' + this._src + ')');
      // Maybe we can refactor this and start uding @HostBinding
      this._renderer.addClass(this._elementRef.nativeElement, 'img-loaded');
    } else {
      this._renderer.removeClass(this._elementRef.nativeElement, 'img-loaded');
    }
  }
}
