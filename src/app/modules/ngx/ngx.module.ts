import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NgxRoutingModule } from './ngx-routing.module';

import { VerticalBarChartComponent } from './components/vertical-bar-chart/vertical-bar-chart.component';
import { NgxComponent } from './ngx.component';
import { GaugeChartComponent } from './components/gauge-chart/gauge-chart.component';


@NgModule({
  declarations: [
    NgxComponent
    , VerticalBarChartComponent, GaugeChartComponent
  ],
  imports: [
    CommonModule,
    NgxRoutingModule,
    FormsModule,
    NgxChartsModule
  ]
})
export class NgxModule { }
