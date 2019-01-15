import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorRadio]'
})

export class ColorRadioDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('appColorRadio') color: string;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

  setColor(color: string) {
    // TODO: esto lo podemos hacer con host bindings quizas?
    this._renderer.setStyle(this._elementRef.nativeElement, 'backgroundColor', color);
    this._renderer.setStyle(this._elementRef.nativeElement, 'borderColor', color);
  }

  ngOnInit() {
    console.log(this.color);
    this.setColor(this.color);
  }
}
