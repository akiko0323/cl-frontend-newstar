import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClDashboardRoutingModule } from './cl-dashboard-routing.module';
import { ClDashboardComponent } from './cl-dashboard.component';


@NgModule({
  declarations: [
    ClDashboardComponent
  ],
  imports: [
    CommonModule,
    ClDashboardRoutingModule
  ]
})
export class ClDashboardModule { }
