import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  @Output() addFavoritos: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
