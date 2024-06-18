import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'

import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { MainLayoutComponent } from './ui/layouts/main-layout/main-layout.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    //Angular material
    MatToolbarModule
  ],
  exports: [
    NavbarComponent,
    MainLayoutComponent
  ]
})
export class SharedModule { }
