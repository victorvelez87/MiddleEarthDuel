import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaFaccionesComponent } from './ayuda-facciones.component';

describe('AyudaFaccionesComponent', () => {
  let component: AyudaFaccionesComponent;
  let fixture: ComponentFixture<AyudaFaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaFaccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyudaFaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
