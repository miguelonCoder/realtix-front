import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoportalPageComponent } from './geoportal-page.component';

describe('GeoportalPageComponent', () => {
  let component: GeoportalPageComponent;
  let fixture: ComponentFixture<GeoportalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeoportalPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeoportalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
