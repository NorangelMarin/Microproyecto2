import { Component, OnInit, Input } from '@angular/core';
import { FavoritosService } from '../../servicios/favoritos.service';
import firebase from 'firebase';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {

  user: firebase.User = null;
  @Input() dataentrante:any;

  constructor(private favoritos: FavoritosService, private Auth: AuthService) { }

  ngOnInit(): void {
    this.Auth.getCurrentUser().subscribe((user) => {
      this.user = user;
    })
  }

  agregarFavorito(){
    this.favoritos.addFavoritos.emit({data: this.dataentrante})
  }

}
