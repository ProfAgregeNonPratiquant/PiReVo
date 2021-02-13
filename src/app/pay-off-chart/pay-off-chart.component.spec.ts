import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOffChartComponent } from './pay-off-chart.component';

describe('PayOffChartComponent', () => {
  let component: PayOffChartComponent;
  let fixture: ComponentFixture<PayOffChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayOffChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOffChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
