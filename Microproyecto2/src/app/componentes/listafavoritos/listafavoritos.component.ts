import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-listafavoritos',
  templateUrl: './listafavoritos.component.html',
  styleUrls: ['./listafavoritos.component.scss']
})
export class ListafavoritosComponent implements OnInit {

  constructor(private favoritos: FavoritosService) { }

  public listafavoritos: Array<any> = []

  ngOnInit(): void {
    this.favoritos.addFavoritos.subscribe(data => {
      this.listafavoritos.push(data);
    })
  }

}
