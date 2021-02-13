import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }
  chart: any
  data = []
  ngOnInit(): void {
    this.data = [0, 10, 5, 2, 20, 30, 45, 12]
    this.chart = new Chart('chart', {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: this.data,
          cubicInterpolationMode: 'monotone',
          steppedLine: false,
          lineTension: 0,
          fill: null
        }]
      },

      // Configuration options go here
      options: {

      }
    });
  }
  randData(chart, n) {
    chart.data.labels = []
    chart.data.datasets[0].data = []
    for (let i = 0; i < n; i++) {
      let y = Math.floor(Math.random() * Math.floor(50));
      chart.data.labels.push(i);
      console.log(chart.data.labels)
      chart.data.datasets[0].data.push(y)
      
    }
    chart.update()
  }

}
