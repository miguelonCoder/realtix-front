import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeoportalPageComponent } from './features/consultorio/ui/pages/geoportal-page/geoportal-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: GeoportalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
