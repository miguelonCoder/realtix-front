import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSideHeaderComponent } from './panel-side-header.component';

describe('PanelSideHeaderComponent', () => {
  let component: PanelSideHeaderComponent;
  let fixture: ComponentFixture<PanelSideHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelSideHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelSideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
