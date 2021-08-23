import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LandingContactosComponent } from './contactos/landing/landing-contactos/landing-contactos.component';
import { HomePageComponent } from './home/home-page.component';
import { RemisionLandingComponent } from './remision/landing/remision-landing/remision-landing.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  // LazyLoad
  {
    path:'auth',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'contactos',
    loadChildren: () => import ('./contactos/contactos.module').then(m => m.ContactosModule)
  },
  {
    path:'remision',
    loadChildren: () => import ('./remision/remision.module').then(m => m.RemisionModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
