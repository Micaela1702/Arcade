import { Component, EventEmitter, Input, Output } from '@angular/core';
import { i_arcade } from '../arcade-list/i-arcade';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  imports: [FormsModule],
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.css',
})
export class InputIntegerComponent {

  constructor(){}

  @Input({ required: true }) quantity!: number;

  @Input() max!: number;

  @Output() quantityChange : EventEmitter<number> = new EventEmitter<number>();

  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  /* FUNCION PARA AUMENTAR LA CANTIDAD DE JUEGOS (SIEMPRE QUE HAYA STOCK) */
  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("Se alcanzó el máximo de juegos.")
    }
  }

  /* FUNCION PARA DISMINUIR LA CANTIDAD DE JUEGOS (SIEMPRE QUE HAYA) */
  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  /* INPUT PARA PONER DIRECTAMENTE EL NUMERO */
  changeQuantity(event: KeyboardEvent): void{
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }

}
