import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlidesProgressBarComponent } from './slides-progress-bar.component';

describe('SlidesProgressBarComponent', () => {
  let component: SlidesProgressBarComponent;
  let fixture: ComponentFixture<SlidesProgressBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
