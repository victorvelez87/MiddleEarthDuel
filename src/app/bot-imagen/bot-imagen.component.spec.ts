import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotImagenComponent } from './bot-imagen.component';

describe('BotImagenComponent', () => {
  let component: BotImagenComponent;
  let fixture: ComponentFixture<BotImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
