import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from '../contactos/components/editar/editar.component';
import { RemisionLandingComponent } from './landing/remision-landing/remision-landing.component';

const routes: Routes = [
  {
    path: '',
    component: RemisionLandingComponent,
    children: [
      {
        path: 'editar',
        component: EditarComponent
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class RemisionRoutingModule { }
