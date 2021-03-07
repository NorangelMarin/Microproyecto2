import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {environment} from "src/environments/environment";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListapeliculasComponent } from './componentes/listapeliculas/listapeliculas.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { ListafavoritosComponent } from './componentes/listafavoritos/listafavoritos.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { PaginacionComponent } from './componentes/paginacion/paginacion.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';

import { AuthService } from './servicios/auth.service';
import { ApiService } from './servicios/api.service';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    NavbarComponent,
    PeliculasComponent,
    LoginComponent,
    ListapeliculasComponent,
    ReservasComponent,
    DetallesComponent,
    ListafavoritosComponent,
    BuscadorComponent,
    PaginacionComponent,
    TarjetasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, ApiService], 
  bootstrap: [AppComponent]
})
export class AppModule { 
}
