import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConsultorioDialogComponent } from './create-consultorio-dialog.component';

describe('CreateConsultorioDialogComponent', () => {
  let component: CreateConsultorioDialogComponent;
  let fixture: ComponentFixture<CreateConsultorioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateConsultorioDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateConsultorioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
