import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoportalPageComponent } from './ui/pages/geoportal-page/geoportal-page.component';
import { SidePanelComponent } from './ui/components/side-panel/side-panel.component';
import { MapComponent } from './ui/components/map/map.component';
import { ListComponent } from './ui/components/list/list.component';
import { PanelSideHeaderComponent } from './ui/components/panel-side-header/panel-side-header.component';
import { LayerConsultoriosComponent } from './ui/components/layer-consultorios/layer-consultorios.component';
import { ConsultorioState } from './ui/services/consultorio-state.service';

import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog'
import {MatSelectModule} from '@angular/material/select'

import { ReactiveFormsModule } from '@angular/forms';
import { CardConsultorioComponent } from './ui/components/card-consultorio/card-consultorio.component';
import { LayerDistribucionComponent } from './ui/components/layer-distribucion/layer-distribucion.component';
import { CreateConsultorioDialogComponent } from './ui/components/create-consultorio-dialog/create-consultorio-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateConsultorioDialogComponent } from './ui/components/update-consultorio-dialog/update-consultorio-dialog.component';



@NgModule({
  declarations:[
    GeoportalPageComponent,
    SidePanelComponent,
    MapComponent,
    ListComponent,
    PanelSideHeaderComponent,
    LayerConsultoriosComponent,
    CardConsultorioComponent,
    LayerDistribucionComponent,
    CreateConsultorioDialogComponent,
    UpdateConsultorioDialogComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [
    ConsultorioState
  ]
})
export class ConsultorioModule { }
