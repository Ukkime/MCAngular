import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart: any[] = []; // Aquí se almacenarán los productos del carrito
  precioTotal: number = 0;
  ngOnInit(): void {
    // Cargar productos desde el sessionStorage
    const cartItems = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.cart = cartItems;
  }
  removeFromCart(item: any) {
    // Implementa la lógica para eliminar un producto del carrito
    // Por ejemplo, actualiza this.cart y sessionStorage

    // Encuentra el índice del producto a eliminar
    const index = this.cart.findIndex((product) => product.id === item.id);
    this.cart.splice(index, 1);

    // Actualiza el carrito en sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  handleTotalRefresh($event: any) {
    this.precioTotal = $event;
  }
}
