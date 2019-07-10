import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { TeamComponent } from './team/team.component';
 
const routes: Routes = [
    {   path: 'MyTeam',   component: TeamComponent   },
  ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeambuilderRoutingModule { }