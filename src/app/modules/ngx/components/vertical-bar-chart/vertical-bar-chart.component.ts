import { Component, OnInit } from '@angular/core';
import { single } from '../../data/vertical-bar-chart';


@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements OnInit {
  single: any[] = [];
  multi: any[] = [];

  view1 = 700;
  view2 = 400;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
  }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
  }

}
