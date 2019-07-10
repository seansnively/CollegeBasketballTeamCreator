import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { InventoryRouting } from './inventory-routing.module';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  imports: [
    CommonModule,
    InventoryRouting,
    DragDropModule
  ],
  declarations: [
    ProductAlertsComponent,
    ProductDetailsComponent,
    DraganddropComponent
    ]
})
export class InventoryModule { }