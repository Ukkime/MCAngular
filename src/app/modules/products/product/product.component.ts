import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [DataService],
})
export class ProductComponent implements OnInit {
  constructor(
    private _dataService: DataService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.refresh();
    });
  }

  ngOnInit(): void {}

  product: any;
  id: any;

  refresh(): void {
    this._dataService.getProductById(this.id).subscribe((response) => {
      this.product = response;
    });
  }    
  addToCart(value: any) {
    //save to sessionstorage
    let cart = JSON.parse(sessionStorage.getItem('cart') + '') || [];
    cart.push(this.product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto añadido al carrito');
  }
}
