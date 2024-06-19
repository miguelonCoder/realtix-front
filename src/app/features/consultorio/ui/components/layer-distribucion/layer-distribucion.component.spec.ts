import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerDistribucionComponent } from './layer-distribucion.component';

describe('LayerDistribucionComponent', () => {
  let component: LayerDistribucionComponent;
  let fixture: ComponentFixture<LayerDistribucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayerDistribucionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayerDistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
