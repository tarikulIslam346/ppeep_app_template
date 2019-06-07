import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchantComponent } from './marchant.component';

describe('MarchantComponent', () => {
  let component: MarchantComponent;
  let fixture: ComponentFixture<MarchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
