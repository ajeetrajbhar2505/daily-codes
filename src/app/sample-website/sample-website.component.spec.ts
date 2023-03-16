import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleWebsiteComponent } from './sample-website.component';

describe('SampleWebsiteComponent', () => {
  let component: SampleWebsiteComponent;
  let fixture: ComponentFixture<SampleWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
