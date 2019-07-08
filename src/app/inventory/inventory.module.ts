import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

import { InventoryRouting } from './inventory-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InventoryRouting
  ],
  declarations: [
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductListComponent
    ]
})
export class InventoryModule { }