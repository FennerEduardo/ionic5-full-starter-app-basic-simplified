import { Component, ViewEncapsulation, AfterContentInit, ContentChild } from '@angular/core';

// Lista de los componentes de Ionic: https://github.com/ionic-team/ionic/blob/master/angular/src/directives/proxies.ts
import { Checkbox } from '@ionic/angular';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: [
    './custom-checkbox.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CustomCheckboxComponent implements AfterContentInit {
  // @ViewChild(Checkbox) checkbox: Checkbox;
  @ContentChild(Checkbox) checkbox: Checkbox;

  constructor() {}

  ngAfterContentInit() {
    // ContentChild is set
    console.log(this.checkbox);
    // debugger;
  }

  test(): void {
    console.log(this.checkbox.checked);
  }
}
