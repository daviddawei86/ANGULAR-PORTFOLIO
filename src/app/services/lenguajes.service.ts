import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {


  private lenguajes: Lenguaje[] =

[
  {
    conocimiento: 'Javacript',
    experiencia:  'Experiencia Profesional - ES6',
    descripcion: 'Aplicaciones full stack mediante Javascript , CRUD , peticiones HTTP , objetos , interfaces.',
    descripcion2: 'Experiencia en Typescript durante el desarrollo de aplicaciones en Angular.',
    descripcion3: 'Formularios , Login , Manipulación de DOM.',
    descripcion4: 'Aplicaciones Web para el gestor de tareas REDMINE, Nociones básicas de IONIC',
    img: 'assets/img/lenguajes.png',
    
   },
   {
     conocimiento: 'Angular',
     experiencia:  'Experiencia Profesional - Angular 2+',
     descripcion:  'Desarrollo Front End para aplicaciones Full Stack (MEAN) para el control de instrumentos en una planta química.',
     descripcion2: 'Desarrollo de aplicaciones con login , control de usuarios , formularios , CRUD.' ,
     descripcion3: 'Web API Spotify , Web API Películas , Postman.' ,
     img: 'assets/img/angular.png',
   
   },
   {
    conocimiento: 'PHP',
    experiencia: 'Lenguaje vehicular "FP Desarrollo de aplicaciones web"',
    descripcion: 'Desarrollo de aplicaciones Web en PHP , CRUD , Login , Back End.',
    descripcion2: 'Web de películas construida en LARAVEL (ejemplo subido a Github). ',
    img: 'assets/img/php.jpg',
 
  },

   {
    conocimiento: 'Desarrollo de Aplicaciones MEAN',
    experiencia: 'Experiencia Profesional',
    descripcion: 'Desarrollo Web full stack (MongoDB, Express, Angular y Node.js) para una web con base de datos de instrumentos.',
    descripcion2: 'Front End (Angular) , Back End (Node - Express) , Base de datos (MongoDB) , Servicios REST.',
    img: 'assets/img/mean.png',
  
   },
   {
     conocimiento: 'SQL',
     experiencia:  'Experiencia Profesional',
     descripcion: 'Proyecto migración de datos de phpMyAdmin a gestor de tareas REDMINE mediante sentencias SQL.',
     descripcion2: 'Conocimientos en MySQL, phpMyAdmin , Oracle.',
     img: 'assets/img/sql.png',
  
   },
   {
    conocimiento: 'Java',
    experiencia:  'Lenguaje vehicular "FP Desarrollo aplicaciones multiplataforma"',
    descripcion: 'Aplicaciones multiplataforma (Visual Studio) Programación orientada a objetos',
    descripcion2: 'Aplicaciones móviles (Android Studio)',
    descripcion3: 'Java MVC , Hibernate , MAVEN',
    img: 'assets/img/java.jpg',
 
  },
  {
    conocimiento: '.NET',
    experiencia:  'Lenguaje vehicular "FP Desarrollo aplicaciones multiplataforma C#"',
    descripcion: 'Conocimientos altos en programación C#.',
    descripcion2: 'Desarrollo de aplicaciones de escritorio en Windows Forms .NET',
    descripcion3: 'Conocimientos en ASP.NET',
    img: 'assets/img/net.png',
 
  },
  {
    conocimiento: 'Python',
    experiencia:  'Lenguaje vehicular "FP Desarrollo aplicaciones multiplataforma"',
    descripcion: 'Desarrollo de módulos ERP ODOO',
    descripcion2: 'Conocimientos en programación Python.',
    img: 'assets/img/python.jpg',
 
  },
  
 
 ];

  

  constructor() {  console.log('Servicio listo'); }

  getLenguajes(): Lenguaje[]{

    return this.lenguajes;
 }

  getLenguaje(id: string){

    return this.lenguajes[id];
 }

}


export interface Lenguaje{

  conocimiento: string;
  descripcion: string;
  img: string;
  descripcion2?: string;
  descripcion3?: string;
  descripcion4?: string;
  experiencia?: string;
  idx?: number;
}

