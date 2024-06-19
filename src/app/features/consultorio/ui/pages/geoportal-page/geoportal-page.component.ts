import { Component } from '@angular/core';
import { CreateConsultorioDialogComponent } from '../../components/create-consultorio-dialog/create-consultorio-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, filter, switchMap } from 'rxjs';
import { ConsultorioState } from '../../services/consultorio-state.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-geoportal-page',
  templateUrl: './geoportal-page.component.html',
  styleUrl: './geoportal-page.component.css'
})
export class GeoportalPageComponent {

  constructor(
    private dialog: MatDialog,
    private consultorioService: ConsultorioState,
    private _snackBar: MatSnackBar
  ){}

  subscription = new Subscription()

  handleCreateConsultorio(){
    const dialogRef = this.dialog.open(CreateConsultorioDialogComponent, {
      maxHeight: '100vh',
      maxWidth: '100vw',
      panelClass: 'responsive-dialog'
    })

    this.subscription.add(
      dialogRef.afterClosed()
        .pipe(
          filter(result => result),
          switchMap(result => this.consultorioService.createConsultorio(result))
        ).subscribe({
          next: () => this._snackBar.open(
            'Se ha creado el consultorio exitosamente', '', {
              duration: 3000
            }
          ),
          error: () => this._snackBar.open(
            'Error al intentar crear el consultorio', '', {
              duration: 5000
            }
          )
        })
    )
  }
}
