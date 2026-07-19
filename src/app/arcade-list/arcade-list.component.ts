import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // chequear
import { i_arcade } from './i-arcade';
import { FormsModule } from '@angular/forms';
import { arcadeDataService } from './arcade-data.service';
import { CarritoDataService } from '../carrito/carrito-data.service';
import { Router } from '@angular/router';
import {InputIntegerComponent} from '../input-integer/input-integer';
@Component({
  selector: 'app-arcade',
  imports: [CommonModule, FormsModule, InputIntegerComponent],
  templateUrl: './arcade-list.html',
  styleUrl: './arcade.css',
})
export class Juego implements OnInit {
  juego : i_arcade[] = [];
  constructor (protected arcadeDataService: arcadeDataService, protected router: Router, protected CarritoDataService: CarritoDataService){}
  ngOnInit(): void {
     this.arcadeDataService.getAll().subscribe({next: (juego) => {this.juego = juego; console.log(juego);
     this.CarritoDataService.setJuegoListReference(this.juego);
           },
           error: (err) => {
             console.error('Error al cargar los juegos', err);
             // muestra mensaje de error
           }
         });
       }

 maxReached(m: string) {
     alert(m);
   }

 addToCart(juego: i_arcade): void {
     if (!juego.quantity || juego.quantity < 1) {
       alert('Por favor, agregá una cantidad antes de comprar.');
       return;
     }

     this.CarritoDataService.addToCart(juego);
     juego.quantity = 0;
   }
 }



