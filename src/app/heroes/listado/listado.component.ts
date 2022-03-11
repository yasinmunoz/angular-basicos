import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarElemento (): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
