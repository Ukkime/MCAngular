import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  private backEndApi;

  constructor(private http: HttpClient) {

    this.backEndApi = 'https://tienda.mercadona.es/api/';
  }

  listCategories() {
    return this.http
      .get(this.backEndApi + 'categories/')
      .pipe(map((response: any) => response));
  }

  getProductsByCategory(categoryId: number) {
    return this.http
      .get(this.backEndApi + 'categories/' + categoryId)
      .pipe(map((response: any) => response));
  }

  getProductById(productId: number) {
    return this.http
      .get(this.backEndApi + 'products/' + productId)
      .pipe(map((response: any) => response));
  }
}
