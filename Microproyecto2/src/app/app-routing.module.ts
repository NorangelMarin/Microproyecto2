import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'listapeliculas', component: ListapeliculasComponent},
  {path: 'reservas', component: ReservasComponent},
  {path: 'detalles', component: DetallesComponent},
  {path: 'listafavoritos', component: ListafavoritosComponent},
  {path: 'buscador', component: BuscadorComponent},
  {path: 'paginacion', component: PaginacionComponent},
  {path: 'tarjetas', component: TarjetasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
