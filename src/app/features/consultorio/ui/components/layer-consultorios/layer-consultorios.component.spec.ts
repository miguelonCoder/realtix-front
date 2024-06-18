import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerConsultoriosComponent } from './layer-consultorios.component';

describe('LayerConsultoriosComponent', () => {
  let component: LayerConsultoriosComponent;
  let fixture: ComponentFixture<LayerConsultoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayerConsultoriosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayerConsultoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
