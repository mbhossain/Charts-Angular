import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GaugeChartComponent } from './components/gauge-chart/gauge-chart.component';
import { VerticalBarChartComponent } from './components/vertical-bar-chart/vertical-bar-chart.component';
import { NgxComponent } from './ngx.component';

const routes: Routes = [
  { path: '', redirectTo: 'vertical-bar-charts', pathMatch: 'full' },
  {
    path: ''
    , component: NgxComponent
    , children:
      [
        { path: 'vertical-bar-charts', component: VerticalBarChartComponent },
        { path: 'gauge-chart', component: GaugeChartComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxRoutingModule { }
