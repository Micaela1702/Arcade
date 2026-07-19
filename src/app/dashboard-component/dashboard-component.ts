import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // chequear
import { Juego } from '../arcade-list/arcade-list.component';
import { Carrito } from '../carrito/carrito';

@Component({
  selector: 'app-dashboard-component',
  imports: [CommonModule, Juego, Carrito],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {}
