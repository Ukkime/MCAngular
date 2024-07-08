import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwipeTestComponent } from './swipe-test/swipe-test.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule) },
  { path: 'categories', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
  { path: 'shopping', loadChildren: () => import('./modules/shopping/shopping.module').then(m => m.ShoppingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
