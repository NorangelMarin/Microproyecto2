import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-listafavoritos',
  templateUrl: './listafavoritos.component.html',
  styleUrls: ['./listafavoritos.component.scss']
})
export class ListafavoritosComponent implements OnInit {

  public listafavoritos: Array<any> = []

  constructor(private favoritos: FavoritosService) { }

  ngOnInit(): void {
    this.favoritos.addFavoritos.subscribe(data => {
      console.log(data)
      this.listafavoritos.push(data);
    })
  }

}
