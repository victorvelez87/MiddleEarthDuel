import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaIconosComponent } from './ayuda-iconos.component';

describe('AyudaIconosComponent', () => {
  let component: AyudaIconosComponent;
  let fixture: ComponentFixture<AyudaIconosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaIconosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyudaIconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
