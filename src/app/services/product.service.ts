import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsArray: Product[] = [];
    // {
    // Image: 'assets/bag1.jpg',
    // name: 'Women\'s bag',
    // Description: `Casual accessorie's`,
    // Price: 'Rs 1000/-',
    // alt: 'no image',
    // isAvailable: true},

    // {
    // Image: 'assets/bag2.jpg',
    // name: 'Women\'s bag',
    // Description: `Casual accessorie's`,
    // Price: 'Rs 1000/-',
    // alt: 'no image',
    // isAvailable: false
  // }

  constructor(
    private httpClient: HttpClient
  ) { }
  getProducts() {
    // return this.productsArray;
     return this.httpClient.get('http://localhost:3000/product');
  }
}
