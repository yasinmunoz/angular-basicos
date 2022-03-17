import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 500
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  agregar() {
    // si es un string vacío (trim para que no cuente espacios) se sale de la función
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);

    this.personajes.push(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };

    console.log(this.personajes);

  }

  cambiarNombre(event: any) {
    console.log(event.target.value);

  }
}
