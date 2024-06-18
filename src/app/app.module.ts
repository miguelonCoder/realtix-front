import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { GeoportalPageComponent } from './features/consultorio/ui/pages/geoportal-page/geoportal-page.component';
import { ConsultorioModule } from './features/consultorio/consultorio.module';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IConsultoriosRepository } from './features/consultorio/domain/repositories/consultorios-repository.abstract';
import { HttpConsultoriosRepository } from './features/consultorio/infraestructure/interface-adapters/http-consultorios.repository';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ConsultorioModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: IConsultoriosRepository,
      useClass: HttpConsultoriosRepository
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
