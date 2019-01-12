import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, ViewEncapsulation } from '@angular/core';

import { SlidesWrapperComponent } from '../slides-wrapper/slides-wrapper.component';

@Component({
  selector: 'nge-slides-progress-bar',
  templateUrl: './slides-progress-bar.component.html',
  styleUrls: ['./slides-progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SlidesProgressBarComponent {
  private _active = 0;
  @Input() set active(value: number) {
    const num = Number(value);
    this._active = (!isNaN(num)) ? num : 0;
    this._cd.detectChanges();
  }

  private _count = 1;
  @Input() set count(value: number) {
    const num = Number(value);
    this._count = (!isNaN(num)) ? num : 1;
    this._counter = Array(this._count).fill(0).map((x: number, i: number) => i);
    this._cd.detectChanges();
  }

  private _counter: number[] = [];

  private _wrapper: SlidesWrapperComponent;
  @Input() set wrapper(value: SlidesWrapperComponent) {
    this._wrapper = value;
  }

  constructor(private _cd: ChangeDetectorRef) { }

  get active(): number {
    return this._active;
  }

  get count(): number {
    return this._count;
  }

  get counter(): number[] {
    return this._counter;
  }

  public goTo(value: number): void {
    if (this._wrapper) {
      this._wrapper.slide = value;
    }
  }
}
