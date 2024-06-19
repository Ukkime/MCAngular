import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-totalprice',
  templateUrl: './totalprice.component.html',
  styleUrl: './totalprice.component.css',
})
export class TotalpriceComponent {
  // subscribe to products variable
  _products: any = [];
  total: number = 0;

  @Input() set products(value: any) {
    this._products = value;
    this.calculateTotal();
  }

  @Output() totalRefresh = new EventEmitter<number>();

  calculateTotal() {
    this.total = this._products.reduce((acc: number, product: any) => {
      return acc + +product.price_instructions.unit_price;
    }, 0);
  }

  refresh() {
    this.totalRefresh.emit(this.total);
  }
}
