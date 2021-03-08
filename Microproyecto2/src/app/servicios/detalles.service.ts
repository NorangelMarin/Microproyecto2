import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetallesService {

  @Output() verDetalles: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
