import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodExpressLayoutComponent } from './food-express-layout.component';

describe('FoodExpressLayoutComponent', () => {
  let component: FoodExpressLayoutComponent;
  let fixture: ComponentFixture<FoodExpressLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodExpressLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodExpressLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
