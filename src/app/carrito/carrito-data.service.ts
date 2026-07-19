import { Injectable } from '@angular/core';
import { i_arcade } from '../arcade-list/i-arcade';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoDataService {
  private _cartList: i_arcade[] = [];
  private _juegoListReference: i_arcade[] = [];

  cartList: BehaviorSubject<i_arcade[]>;

  constructor() {

    const savedCart = localStorage.getItem('carrito_arcade');
    if (savedCart) {
      this._cartList = JSON.parse(savedCart);
    }
    this.cartList = new BehaviorSubject<i_arcade[]>(this._cartList);
  }

  private saveCart() {
    localStorage.setItem('carrito_arcade', JSON.stringify(this._cartList));
  }

  addToCart(juego: i_arcade) {
    let juegoInCatalog = this._juegoListReference.find(j => j.name === juego.name);

    if (!juegoInCatalog || juegoInCatalog.stock < juego.quantity) {
      console.warn('No hay suficiente stock para agregar este juego');
      return;
    }

    // Descontar stock
    juegoInCatalog.stock -= juego.quantity;

    // Agregar al carrito
    let item = this._cartList.find((v1) => v1.name == juego.name);
    if (!item) {
      this._cartList.push({ ...juego });
    } else {
      item.quantity += juego.quantity;
    }

    this.cartList.next(this._cartList);

    // Guardamos los cambios en el almacenamiento local
    this.saveCart();
  }

  removeQuantityFromCart(juegoName: string, quantity: number): number {
    let item = this._cartList.find(j => j.name === juegoName);
    if (!item) return 0;

    const quantityToRemove = Math.min(quantity, item.quantity);

    item.quantity -= quantityToRemove;

    if (item.quantity <= 0) {
      this._cartList = this._cartList.filter(j => j.name !== juegoName);
    }

    this.cartList.next(this._cartList);

    // Guardamos los cambios también al remover elementos
    this.saveCart();

    return quantityToRemove;
  }

  setJuegoListReference(juegos: i_arcade[]) {
    this._juegoListReference = juegos;

    // si la API cargó y ya teníamos juegos en el carrito guardados,
    // restamos las cantidades correspondientes del catálogo para que el stock visual coincida.
    if (this._cartList.length > 0 && this._juegoListReference.length > 0) {
      this._cartList.forEach(cartItem => {
        let catalogItem = this._juegoListReference.find(j => j.name === cartItem.name);
        if (catalogItem) {
          catalogItem.stock -= cartItem.quantity;
        }
      });
    }
  }

  getFullJuegoList(): i_arcade[] {
    return this._juegoListReference;
  }
}
