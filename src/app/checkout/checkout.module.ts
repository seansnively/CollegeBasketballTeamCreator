import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import {CheckoutRoutingModule} from './checkout-routing.module'
@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CartComponent,
    ShippingComponent
    ],
  exports: [
    CartComponent,
    ShippingComponent
  ],
})
export class CheckoutModule { }