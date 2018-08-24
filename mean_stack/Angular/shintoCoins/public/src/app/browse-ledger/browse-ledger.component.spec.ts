import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseLedgerComponent } from './browse-ledger.component';

describe('BrowseLedgerComponent', () => {
  let component: BrowseLedgerComponent;
  let fixture: ComponentFixture<BrowseLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
