import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  title = 'Contador App';
  numero = 10;

  constructor() { }

  ngOnInit(): void {
  }

  // base: number = 5;

  sumar = () => this.numero += 1;

  restar = () => this.numero -= 1;

  acumular = (valor: number) => this.numero += valor;
}
