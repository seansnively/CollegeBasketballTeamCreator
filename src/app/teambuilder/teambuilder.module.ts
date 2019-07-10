import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';
import {TeambuilderRoutingModule} from './teambuilder-routing.module'
@NgModule({
  imports: [
    CommonModule,
    TeambuilderRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    TeamComponent
    ],
  exports: [
    TeamComponent
  ],
})
export class TeambuilderModule { }