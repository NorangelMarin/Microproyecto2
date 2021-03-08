import { Component, OnInit } from '@angular/core';
import { DetallesService } from '../../servicios/detalles.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  public listadetalles: Array<any> = []

  constructor(private detalles: DetallesService) { }

  ngOnInit(): void {
    this.detalles.verDetalles.subscribe(data => {
      console.log(data)
      this.listadetalles.push(data);
    })
  }

}
