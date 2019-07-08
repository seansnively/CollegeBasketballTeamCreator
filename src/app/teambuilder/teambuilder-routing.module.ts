import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { TeamComponent } from './team/team.component';
import { ShippingComponent } from './shipping/shipping.component';
 
const routes: Routes = [
    {   path: 'MyTeam',   component: TeamComponent   },
    {   path: 'shipping',   component: ShippingComponent   },
  ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeambuilderRoutingModule { }