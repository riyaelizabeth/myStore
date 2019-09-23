import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsArray: Product[] = [];
  constructor(private productservices: ProductService ) { 
this.productservices.getProducts().subscribe((res: Product[]) => {
  this. productsArray = res;
});
  }
  ngOnInit() {
  }

}
