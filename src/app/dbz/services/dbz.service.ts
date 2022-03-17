import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    constructor() {}

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 500
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push( personaje );
    }
}
