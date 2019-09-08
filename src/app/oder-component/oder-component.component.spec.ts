import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OderComponentComponent } from './oder-component.component';

describe('OderComponentComponent', () => {
  let component: OderComponentComponent;
  let fixture: ComponentFixture<OderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
