import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// RUTAS
import {APP_ROUTING} from './app.routes';

// SERVICIOS
import {LenguajesService} from './services/lenguajes.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LenguajeTarjetaComponent } from './components/lenguaje-tarjeta/lenguaje-tarjeta.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LogrosComponent } from './components/logros/logros.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LenguajeTarjetaComponent,
    LenguajesComponent,
    ContactoComponent,
    CarruselComponent,
    LogrosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    RouterModule
  
  
  ],
  providers: [
    LenguajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
