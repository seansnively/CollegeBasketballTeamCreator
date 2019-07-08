import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';
import { ShippingComponent } from './shipping/shipping.component';
import {CheckoutRoutingModule} from './checkout-routing.module'
@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    TeamComponent,
    ShippingComponent
    ],
  exports: [
    TeamComponent,
    ShippingComponent
  ],
})
export class CheckoutModule { }