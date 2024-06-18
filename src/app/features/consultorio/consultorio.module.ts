import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoportalPageComponent } from './ui/pages/geoportal-page/geoportal-page.component';
import { SidePanelComponent } from './ui/components/side-panel/side-panel.component';
import { MapComponent } from './ui/components/map/map.component';
import { ListComponent } from './ui/components/list/list.component';
import { PanelSideHeaderComponent } from './ui/components/panel-side-header/panel-side-header.component';



@NgModule({
  declarations:[
    GeoportalPageComponent,
    SidePanelComponent,
    MapComponent,
    ListComponent,
    PanelSideHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConsultorioModule { }
