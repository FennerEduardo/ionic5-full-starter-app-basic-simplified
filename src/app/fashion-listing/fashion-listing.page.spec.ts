import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionListingPage } from './fashion-listing.page';

describe('FashionListingPage', () => {
  let component: FashionListingPage;
  let fixture: ComponentFixture<FashionListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
