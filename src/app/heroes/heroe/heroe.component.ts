import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  nombre = 'Yasin';
  edad = 45;

  constructor() { }

  ngOnInit(): void {
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  capitalizarNombre(): string {
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';    
  }

  cambiarEdad(): void {
    this.edad = 50;
  }
}
