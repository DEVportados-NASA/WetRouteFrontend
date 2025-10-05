import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediction1 } from './prediction1';

describe('Prediction1', () => {
  let component: Prediction1;
  let fixture: ComponentFixture<Prediction1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prediction1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prediction1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
