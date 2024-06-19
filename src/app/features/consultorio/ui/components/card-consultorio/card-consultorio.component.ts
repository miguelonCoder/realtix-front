import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConsultorioModel } from '../../../domain/models/consultorio.model';

@Component({
  selector: 'app-card-consultorio',
  templateUrl: './card-consultorio.component.html',
  styleUrl: './card-consultorio.component.css'
})
export class CardConsultorioComponent {
  @Input() consultorio: ConsultorioModel

  @Output() select = new EventEmitter<number>();
  handleSelect() {
    this.select.emit(this.consultorio.ID);
  }

  @Output() edit = new EventEmitter<ConsultorioModel>();
  handleEdit() {
    this.edit.emit(this.consultorio);
  }

}
