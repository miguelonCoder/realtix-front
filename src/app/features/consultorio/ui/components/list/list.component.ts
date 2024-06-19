import { Component } from '@angular/core';
import { ConsultorioState } from '../../services/consultorio-state.service';
import { ConsultorioModel } from '../../../domain/models/consultorio.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription, filter, switchMap, tap } from 'rxjs';
import { UpdateConsultorioDialogComponent } from '../update-consultorio-dialog/update-consultorio-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor(
    private dialog: MatDialog,
    public consultorioService: ConsultorioState,
    private _snackBar: MatSnackBar
  ){}

  subscription = new Subscription()

  selectConsultorio(id: number){
    this.consultorioService.selected$.next(id)
  }

  editConsultorio(consultorio: ConsultorioModel){
    const dialogRef = this.dialog.open(UpdateConsultorioDialogComponent, {
      maxHeight: '100vh',
      maxWidth: '100vw',
      panelClass: 'responsive-dialog',
      data: consultorio
    })

    this.subscription.add(
      dialogRef.afterClosed()
        .pipe(
          tap(res => console.log(res)),
          filter(result => result),
          switchMap(result => this.consultorioService.createConsultorio(result))
        ).subscribe({
          next: () => this._snackBar.open(
            'Se ha actualizado el consultorio exitosamente', '', {
              duration: 3000
            }
          ),
          error: () => this._snackBar.open(
            'Error al intentar actualizar el consultorio', '', {
              duration: 5000
            }
          )
        })
    )
  }

}
