import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlidesWrapperComponent } from './slides-wrapper.component';

describe('SlidesWrapperComponent', () => {
  let component: SlidesWrapperComponent;
  let fixture: ComponentFixture<SlidesWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
