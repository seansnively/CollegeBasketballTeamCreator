import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';
import {TeambuilderRoutingModule} from './teambuilder-routing.module';
import { TeamratingcalcComponent } from './teamratingcalc/teamratingcalc.component'
@NgModule({
  imports: [
    CommonModule,
    TeambuilderRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    TeamComponent,
    TeamratingcalcComponent
    ],
  exports: [
    TeamComponent
  ],
})
export class TeambuilderModule { }