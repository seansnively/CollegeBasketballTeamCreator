
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
const routes: Routes = [
    //{ path: '', component: ProductListComponent },
    { path: 'products/:productId', component: ProductDetailsComponent },
    { path: '', component: DraganddropComponent}
  ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRouting {
}