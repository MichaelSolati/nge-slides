import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSectionComponent } from './slide-section.component';

describe('SlideSectionComponent', () => {
  let component: SlideSectionComponent;
  let fixture: ComponentFixture<SlideSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
