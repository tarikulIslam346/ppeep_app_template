import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodExpressUserBenifitComponent } from './food-express-user-benifit.component';

describe('FoodExpressUserBenifitComponent', () => {
  let component: FoodExpressUserBenifitComponent;
  let fixture: ComponentFixture<FoodExpressUserBenifitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodExpressUserBenifitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodExpressUserBenifitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
