import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './app/product.model';

type ProductsResponse = {
  products: Product[];
};

@Injectable({
  providedIn: 'root',
})
export class ProductListingService {
  getProduct(id: number, products: Product[]) {
    return products.find((product) => product.id == id);
  }
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductsResponse>('../assets/products.json');
  }
}
