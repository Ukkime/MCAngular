import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { TotalpriceComponent } from './totalprice/totalprice.component';
import { UppercaseCustomPipe } from './../../pipes/uppercase.pipe';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [CartComponent, TotalpriceComponent, UppercaseCustomPipe],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ShoppingModule {}
