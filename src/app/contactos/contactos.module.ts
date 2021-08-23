import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingContactosComponent } from './landing/landing-contactos/landing-contactos.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { EditarComponent } from './components/editar/editar.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ContactosRoutingModule } from './contactos-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LandingContactosComponent,
    AgregarComponent,
    BuscarComponent,
    EditarComponent,
    TablaComponent,
  ],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    MaterialModule,
  ]
})
export class ContactosModule { }
