import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component'

import { AppRoutingModule } from './app-routing.module';
import { RemisionModule } from './remision/remision.module';
import { MaterialModule } from './material/material.module';
import { ContactosModule } from './contactos/contactos.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrorPageComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    ContactosModule,
    MaterialModule,
    RemisionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
