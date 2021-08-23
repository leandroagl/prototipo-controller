import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemisionLandingComponent } from './landing/remision-landing/remision-landing.component';
import { AgregarComponent }         from './components/agregar/agregar.component';
import { EditarComponent }          from './components/editar/editar.component';
import { TablaComponent }           from './components/tabla/tabla.component';
import { RemisionRoutingModule } from './remision-routing.module';

@NgModule({
  declarations: [
    RemisionLandingComponent,
    AgregarComponent,
    EditarComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    RemisionRoutingModule
  ]
})
export class RemisionModule { }
