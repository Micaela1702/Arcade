import {Injectable} from '@angular/core';
import {i_arcade } from '../arcade-list/i-arcade';
import {Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'})

export class CarritoDataService {
  private _cartList: i_arcade[] = [];
  private _juegoListReference: i_arcade[] = []; // referencia al catálogo original

    cartList: BehaviorSubject<i_arcade[]> = new BehaviorSubject(this._cartList);
    constructor(){}
    addToCart(juego: i_arcade) {
      // Buscar la planta en la lista de referencia
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
        this._cartList.push({ ...juego });  // Clonamos el objeto
      } else {
        item.quantity += juego.quantity;
      }

      this.cartList.next(this._cartList);
    }

      /**
       * Elimina una cantidad específica del carrito.
       * Retorna la cantidad realmente removida.
       */

      removeQuantityFromCart(juegoName: string, quantity: number): number {
        let item = this._cartList.find(j => j.name === juegoName);
        if (!item) return 0;

        const quantityToRemove = Math.min(quantity, item.quantity);

        item.quantity -= quantityToRemove;

        if (item.quantity <= 0) {
          this._cartList = this._cartList.filter(j => j.name !== juegoName);
        }

        this.cartList.next(this._cartList);

        return quantityToRemove;
      }

      /**
       * Guarda una referencia al listado original de plantas (para actualizar stock).
       */

      setJuegoListReference(juegos: i_arcade[]) {
        this._juegoListReference = juegos;
      }

      getFullJuegoList(): i_arcade[] {
        return this._juegoListReference;
      }
    }
