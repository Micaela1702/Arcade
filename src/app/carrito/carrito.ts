import { Component } from '@angular/core';
import { CarritoDataService } from './carrito-data.service';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { i_arcade } from '../arcade-list/i-arcade';
@Component({
  selector: 'app-carrito',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {

  cartList$: Observable<i_arcade[]>;
  constructor (protected CarritoDataService: CarritoDataService){
  this.cartList$ = this.CarritoDataService.cartList.asObservable();
  }
 /**
   * Elimina una unidad de un juego del carrito y actualiza el stock.
   */
  removeOneFromCart(juegoName: string) {
    const removed = this.CarritoDataService.removeQuantityFromCart(juegoName, 1);

    if (removed > 0) {
      const fullList = this.CarritoDataService.getFullJuegoList();
      const juegoInCatalog = fullList.find(j => j.name === juegoName);
      if (juegoInCatalog) {
        juegoInCatalog.stock += removed;
      }
    }
  }
}

