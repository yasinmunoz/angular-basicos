import { Component, Input } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // Estos personajes van a venir del componente padre
  // @Input()
  // personajes: Personaje [] = [];

  constructor(private _dbzService: DbzService){}

  get personajes() {
    return this._dbzService.personajes;
  }
}
