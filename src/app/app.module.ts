import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './inventory/product-list/product-list.component';
import { ProductAlertsComponent } from './inventory/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './inventory/product-details/product-details.component';
import { CartService } from './cart.service';
//import { CartComponent } from './checkout/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
//import { ShippingComponent } from './checkout/shipping/shipping.component';

import { CheckoutModule } from './checkout/checkout.module';
import { InventoryModule } from './inventory/inventory.module';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CheckoutModule,
    InventoryModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    //  { path: 'products/:productId', component: ProductDetailsComponent },
      //{ path: 'cart', component: CartComponent },
      //{ path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    //ProductListComponent,
    //ProductAlertsComponent,
    //ProductDetailsComponent,
    //CartComponent,
    //ShippingComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/