import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Chart } from 'chart.js';
import { FormBuilder, FormGroup } from '@angular/forms'


@Component({
  selector: 'app-risky-asset',
  templateUrl: './risky-asset.component.html',
  styleUrls: ['./risky-asset.component.css']
})
export class RiskyAssetComponent implements OnInit {

  riskyAssetForm : FormGroup

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }
  api_url = 'http://127.0.0.1:5000/pirevo'
  riskyAssetChart: any
  p = 0.5;
  u = 0.02;
  d = -0.02;
  n = 50
  ngOnInit(): void {
    this.initForm()
    this.onSubmit()
    this.riskyAssetChart = new Chart('risky-asset', {
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
          }
        ]
      },
      options: {
      }
    })
  }
  initForm() {
    this.riskyAssetForm = this.formBuilder.group(
      {
        p: this.p,
        u: this.u,
        d: this.d,
        n: this.n
      }
    )
  }

  onPChange(e: MatSliderChange) {
    this.p = e.value
  }

  onUChange(e: MatSliderChange) {
    this.u = e.value
  }

  onDChange(e: MatSliderChange) {
    this.d = e.value
  }

  onNChange(e: MatSliderChange) {
    this.n = e.value
  }
  
  

  
  onSubmit() {
    console.log(this.riskyAssetForm.value)
    
    this.http.post<any>(
      this.api_url + '/risky-asset',
      this.riskyAssetForm.value
    ).subscribe(
      (response) => {
        if (this.riskyAssetChart.data.labels.length <  this.n +1) {
          this.riskyAssetChart.data.labels = []
          this.riskyAssetChart.data.datasets[0].data = []
          this.riskyAssetChart.update()
        }
        this.riskyAssetChart.data.labels = response.N
        this.riskyAssetChart.data.datasets[0].data = response.S_path
        this.riskyAssetChart.update()
      }
    )
    
    
    
  }
}
