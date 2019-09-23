import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { componentFactoryName } from '@angular/compiler';
import {ProductdetailsComponent} from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdditemComponent } from './additem/additem.component';
const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent

  },
  {
    path: 'product/:id',
    component: ProductdetailsComponent
  },
  {
    path: 'additem',
    component: AdditemComponent
  },
  {
    path: '**',
    redirectTo: ''
    },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
