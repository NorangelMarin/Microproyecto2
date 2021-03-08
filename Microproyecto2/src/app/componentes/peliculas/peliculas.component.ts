import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  public tarjetas: any = []

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.cargardata();
  }

  public cargardata(){
    this.ApiService.Obtener("https://api.themoviedb.org/3/discover/movie?api_key=45de787fddd0a31b33ab5815e5b2ef85&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1").subscribe(respuesta =>{
      for (let index = 0; index < 8; index++) {
      const data = respuesta['results'][index]
      this.tarjetas[index] = data
      } 
    })
  }

}
