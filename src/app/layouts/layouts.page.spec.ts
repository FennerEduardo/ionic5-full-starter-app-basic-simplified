import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsPage } from './layouts.page';

describe('LayoutsPage', () => {
  let component: LayoutsPage;
  let fixture: ComponentFixture<LayoutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
