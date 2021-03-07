import { Component, OnInit, Input } from '@angular/core';
import { FavoritosService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {

  @Input() dataentrante:any;

  constructor(private favoritos: FavoritosService) { }

  ngOnInit(): void {
  }

  agregarFavorito(){
    console.log(this.dataentrante);
  }

}
