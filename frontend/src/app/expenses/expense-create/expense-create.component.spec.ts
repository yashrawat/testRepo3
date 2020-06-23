import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCreateComponent } from './expense-create.component';

describe('ExpenseCreateComponent', () => {
  let component: ExpenseCreateComponent;
  let fixture: ComponentFixture<ExpenseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
