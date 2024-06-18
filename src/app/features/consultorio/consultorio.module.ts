import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoportalPageComponent } from './ui/pages/geoportal-page/geoportal-page.component';
import { SidePanelComponent } from './ui/components/side-panel/side-panel.component';
import { MapComponent } from './ui/components/map/map.component';
import { ListComponent } from './ui/components/list/list.component';
import { PanelSideHeaderComponent } from './ui/components/panel-side-header/panel-side-header.component';
import { LayerConsultoriosComponent } from './ui/components/layer-consultorios/layer-consultorios.component';
import { ConsultorioState } from './ui/services/consultorio-state.service';

import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations:[
    GeoportalPageComponent,
    SidePanelComponent,
    MapComponent,
    ListComponent,
    PanelSideHeaderComponent,
    LayerConsultoriosComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    ConsultorioState
  ]
})
export class ConsultorioModule { }
