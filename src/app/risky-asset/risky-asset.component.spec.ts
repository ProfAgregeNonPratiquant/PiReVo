import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskyAssetComponent } from './risky-asset.component';

describe('RiskyAssetComponent', () => {
  let component: RiskyAssetComponent;
  let fixture: ComponentFixture<RiskyAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskyAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskyAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
