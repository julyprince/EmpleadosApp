import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasempleadoCComponent } from './caracteristicasempleado-c.component';

describe('CaracteristicasempleadoCComponent', () => {
  let component: CaracteristicasempleadoCComponent;
  let fixture: ComponentFixture<CaracteristicasempleadoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasempleadoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasempleadoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
