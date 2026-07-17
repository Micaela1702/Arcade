import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav-component/nav-component';
import { Juego } from './arcade-list/arcade-list.component';
import { Carrito } from './carrito/carrito';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, Juego, Carrito],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Arcade';
}
