import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSnackBar } from './error-snack-bar';

describe('ErrorSnackBar', () => {
  let component: ErrorSnackBar;
  let fixture: ComponentFixture<ErrorSnackBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorSnackBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorSnackBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
