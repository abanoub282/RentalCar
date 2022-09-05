import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCarsPageComponent } from './rental-cars-page.component';

describe('RentalCarsPageComponent', () => {
  let component: RentalCarsPageComponent;
  let fixture: ComponentFixture<RentalCarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalCarsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalCarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
