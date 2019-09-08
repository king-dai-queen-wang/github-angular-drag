import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceqQuoteComponent } from './priceq-quote.component';

describe('PriceqQuoteComponent', () => {
  let component: PriceqQuoteComponent;
  let fixture: ComponentFixture<PriceqQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceqQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceqQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
