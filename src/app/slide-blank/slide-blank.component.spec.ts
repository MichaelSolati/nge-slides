import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBlankComponent } from './slide-blank.component';

describe('SlideBlankComponent', () => {
  let component: SlideBlankComponent;
  let fixture: ComponentFixture<SlideBlankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBlankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
