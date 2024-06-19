import { Component } from '@angular/core';
import { ConsultorioState } from '../../services/consultorio-state.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor(
    public consultoriosService: ConsultorioState
  ){}

  selectConsultorio(id: number){
    this.consultoriosService.selected$.next(id)
  }

}
