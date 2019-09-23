import { Component } from '@angular/core';
import { Product } from './models/Product';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
productsArray: Product[] = [];
  // firstProduct: Product = {
  //   Image: 'assets/bag1.jpg',
  //   name: 'Women\'s bag',
  //   Description: `Casual accessorie's`,
  //   Price: 'Rs 1000/-',
  //   alt: 'no image',
  //   isAvailable: true
  // };
  // secondProduct: Product = {
  //   Image: 'assets/bag2.jpg',
  //   name: 'Women\'s bag',
  //   Description: `Casual accessorie's`,
  //   Price: 'Rs 1000/-',
  //   alt: 'no image',
  //   isAvailable: false
  // };

  constructor(private productservices: ProductService ) {
    // this.productsArray = this.productservices.getProducts();
    // this.productsArray.push(this.secondProduct);
    this.productservices.getProducts().subscribe((res: Product[]) =>{
      this. productsArray = res;
    });

  }
  title = 'my-store';
}
