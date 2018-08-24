import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineCoinsComponent } from './mine-coins.component';

describe('MineCoinsComponent', () => {
  let component: MineCoinsComponent;
  let fixture: ComponentFixture<MineCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
