import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-consultorio-dialog',
  templateUrl: './create-consultorio-dialog.component.html',
  styleUrl: './create-consultorio-dialog.component.css'
})
export class CreateConsultorioDialogComponent {

  form: FormGroup
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateConsultorioDialogComponent>,
    
  ){
    this.form = this.fb.group({
      'Identifica': ['', Validators.required],
      'Código_de': ['', Validators.required],
      'Nombre_de_': ['', Validators.required],
      'Nombre_del': ['', Validators.required],
      'Teléfono': ['', Validators.required],
      'Dirección': ['', Validators.required],
      'Correo_ele': ['', Validators.required],
      'Tipo_de_Pr': ['', Validators.required],
      'Clase_de_P': ['', Validators.required],
      'codigo_loc': ['', Validators.required],
      'codigo_upz': ['', Validators.required],
      'coordenada': ['', Validators.required],
      'coordena_1': ['', Validators.required],
    })
  }

  onCancel(){
    this.form.reset()
    this.dialogRef.close()
  }

}
