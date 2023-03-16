import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCodesComponent } from './daily-codes.component';

describe('DailyCodesComponent', () => {
  let component: DailyCodesComponent;
  let fixture: ComponentFixture<DailyCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
