import { Component, OnInit } from '@angular/core';
import { LenguajesService, Lenguaje } from '../../services/lenguajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.css']
})
export class LenguajesComponent implements OnInit {

  lenguajes: Lenguaje [] = [];

  constructor(private _lenguajesService:LenguajesService,
              private router: Router) { }

              ngOnInit(){

                this.lenguajes = this._lenguajesService.getLenguajes();
              }

              verLenguaje(idx: number){
                this.router.navigate(['/lenguaje',idx]);
              }

}
