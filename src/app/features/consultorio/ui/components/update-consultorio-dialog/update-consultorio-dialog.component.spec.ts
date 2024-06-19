import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConsultorioDialogComponent } from './update-consultorio-dialog.component';

describe('UpdateConsultorioDialogComponent', () => {
  let component: UpdateConsultorioDialogComponent;
  let fixture: ComponentFixture<UpdateConsultorioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateConsultorioDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateConsultorioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
