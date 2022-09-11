import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCarEditComponent } from './rental-car-edit.component';

describe('RentalCarEditComponent', () => {
  let component: RentalCarEditComponent;
  let fixture: ComponentFixture<RentalCarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalCarEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalCarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
