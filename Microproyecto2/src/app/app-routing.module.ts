import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'peliculas', component: PeliculasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
