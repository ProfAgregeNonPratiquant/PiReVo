import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-pay-off-chart',
  templateUrl: './pay-off-chart.component.html',
  styleUrls: ['./pay-off-chart.component.css']
})
export class PayOffChartComponent implements OnInit {
  
  api_url = 'http://127.0.0.1:5000'

  payOffForm: FormGroup
  payOffChart: Chart

  p = 0.5;
  u = 0.02;
  d = -0.02;
  n = 200;

  k: 0.8
  t: 170


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
    //this.onSubmit()
    this.payOffChart = new Chart(
      'pay-off',
      {
        type: 'line',
        data: {
          labels: [],
          datasets: [
            {
              label: 'S',
              data: [],
              lineTension: 0,
              borderColor: '#ffd740',
              fill: true,
              pointRadius: 0,
              borderWidth: 1
            },
            {
              label: 'K',
              data: [],
              lineTension: 0,
              borderColor: 'black',
              pointRadius: 0,
              borderWidth: 1
            },
            {
              label: 'T',
            }
          ]
        }
      }
    )
  }

  initForm() {
    this.payOffForm = this.formBuilder.group({
      k: this.k,
      t: this.t
    })
  }

}
