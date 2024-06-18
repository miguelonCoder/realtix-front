import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ConsultorioState } from '../../services/consultorio-state.service';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-panel-side-header',
  templateUrl: './panel-side-header.component.html',
  styleUrl: './panel-side-header.component.css'
})
export class PanelSideHeaderComponent implements OnInit {
  
  constructor(
    public consultorioService: ConsultorioState
  ){}

  formControl = new FormControl('')

  ngOnInit(): void {
    this.formControl.valueChanges.pipe(
      debounceTime(300),
      //filter(exp => exp !== null)
    ).subscribe(exp =>
      this.consultorioService.filterConsultorios(exp)
    )
  }

}
