import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartsComponent } from './charts/charts.component';
import { BinomialComponent } from './binomial/binomial.component';
import { RiskyAssetComponent } from './risky-asset/risky-asset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { PayOffChartComponent } from './pay-off-chart/pay-off-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    BinomialComponent,
    RiskyAssetComponent,
    PayOffChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
