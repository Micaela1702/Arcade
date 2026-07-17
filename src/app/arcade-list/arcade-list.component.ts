import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // chequear
import { i_arcade } from './i-arcade';

@Component({
  selector: 'app-arcade',
  imports: [],
  templateUrl: './arcade-list.html',
  styleUrl: './arcade.css',
})
export class Juego {
  misJuegos: i_arcade[] = [ // utilizar mockapi
    {
      nombre: 'Pac-Man',
      genero: 'Laberinto',
      anio: 1980,
      descripcion: 'Come todos los puntos y esquiva a los fantasmas Blinky, Pinky, Inky y Clyde.',
      imagen: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=200',
      disponible: true
    },
    {
      nombre: 'Space Invaders',
      genero: 'Shoot \'em up',
      anio: 1978,
      descripcion: 'Defiende la Tierra de las oleadas de alienígenas que descienden del espacio.',
      imagen: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=200',
      disponible: true
    },
    {
      nombre: 'Street Fighter II',
      genero: 'Peleas',
      anio: 1991,
      descripcion: 'Elige a tu luchador mundial y vence a los rivales en un torneo clandestino.',
      imagen: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=200',
      disponible: false
    }
  ];

  jugarArcade(juego: i_arcade) {
    alert(`¡Iniciando ${juego.nombre}!`);
  }
}
