import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateConsultorioDialogComponent } from '../create-consultorio-dialog/create-consultorio-dialog.component';
import { ConsultorioModel } from '../../../domain/models/consultorio.model';

@Component({
  selector: 'app-update-consultorio-dialog',
  templateUrl: './update-consultorio-dialog.component.html',
  styleUrl: './update-consultorio-dialog.component.css'
})
export class UpdateConsultorioDialogComponent {
  form: FormGroup
  value: ConsultorioModel
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateConsultorioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConsultorioModel,
  ){
    this.form = this.fb.group({
      'Identifica': [data.Identifica, Validators.required],
      'Código_de': [data.Código_de, Validators.required],
      'Nombre_de_': [data.Nombre_de_, Validators.required],
      'Nombre_del': [data.Nombre_del, Validators.required],
      'Teléfono': [data.Teléfono, Validators.required],
      'Dirección': [data.Dirección, Validators.required],
      'Correo_ele': [data.Correo_ele, Validators.required],
      'Tipo_de_Pr': [data.Tipo_de_Pr, Validators.required],
      'Clase_de_P': [data.Clase_de_P, Validators.required],
      'codigo_loc': [data.codigo_loc, Validators.required],
      'codigo_upz': [data.codigo_upz, Validators.required],
      'coordenada': [data.coordenada, Validators.required],
      'coordena_1': [data.coordena_1, Validators.required],
    })

    this.form.valueChanges.subscribe(value => {
      this.value = {
        ...value,
        'ID': this.data.ID
      }
    })
  }

  onCancel(){
    this.form.reset()
    this.dialogRef.close()
  }
}
