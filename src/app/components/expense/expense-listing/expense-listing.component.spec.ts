import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListingComponent } from './expense-listing.component';

describe('ExpenseListingComponent', () => {
  let component: ExpenseListingComponent;
  let fixture: ComponentFixture<ExpenseListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
