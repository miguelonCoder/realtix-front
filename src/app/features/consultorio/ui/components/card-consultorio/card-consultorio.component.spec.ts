import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConsultorioComponent } from './card-consultorio.component';

describe('CardConsultorioComponent', () => {
  let component: CardConsultorioComponent;
  let fixture: ComponentFixture<CardConsultorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardConsultorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
