import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCoinsComponent } from './sell-coins.component';

describe('SellCoinsComponent', () => {
  let component: SellCoinsComponent;
  let fixture: ComponentFixture<SellCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
