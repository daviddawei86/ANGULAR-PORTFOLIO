import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lenguaje-tarjeta',
  templateUrl: './lenguaje-tarjeta.component.html',
  styleUrls: ['./lenguaje-tarjeta.component.css']
})
export class LenguajeTarjetaComponent implements OnInit {

  @Input() lenguaje: any = {};
  @Input() index: number;

  @Output() lenguajeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.lenguajeSeleccionado = new EventEmitter();
   }

  ngOnInit(){
  }

  verLenguaje(){
  //this.instrumentoSeleccionado.emit(this.index);
  this.router.navigate(['/lenguaje', this.index]);
  }

}
