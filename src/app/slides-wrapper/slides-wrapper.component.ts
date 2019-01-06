import { AfterViewInit, Component, HostListener, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

enum KEY_CODE {
  PAGE_UP = 33,
  PAGE_DOWN = 34,
  LEFT_ARROW = 37,
  RIGHT_ARROW = 39
}

@Component({
  selector: 'nge-slides-wrapper',
  templateUrl: './slides-wrapper.component.html',
  styleUrls: ['./slides-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SlidesWrapperComponent {
  private _activeSlide = 0;
  private _handle: string;
  @Input() set handle(value: string) {
    this._handle = value;
  }
  private _hashtag: string;
  @Input() set hashtag(value: string) {
    this._hashtag = value;
  }
  private _slides: any[] = [];
  @ViewChild('slideWrapper') slideWrapper: ElementRef;

  constructor() { }

  static get selector(): string {
    return 'nge-slides-wrapper';
  }

  get handle(): string {
    return this._handle;
  }

  get hashtag(): string {
    return this._hashtag;
  }

  @Input()
  set slide(value: number) {
    const slide = Number(value);
    if (!isNaN(slide) && slide >= 0 && slide <= this._slides.length && this._slides.length) {
      this._slides.forEach((s, i) => s.show = (i === value));
      this._activeSlide = slide;

      if (history.pushState) {
        history.pushState(null, null, '#' + slide);
      } else {
        location.hash = '#';
      }
    }
  }

  @HostListener('window:keyup', ['$event'])
  public keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW || event.keyCode === KEY_CODE.PAGE_DOWN) {
      this._forward();
    } else if (event.keyCode === KEY_CODE.LEFT_ARROW || event.keyCode === KEY_CODE.PAGE_UP) {
      this._back();
    }
  }

  private _back(): void {
    if (this._slides.length) {
      if (this._activeSlide + 1 > this._slides.length) {
        this.slide = this._slides.length - 1;
      } else if (this._activeSlide <= 0) {
        this.slide = 0;
      } else {
        this.slide = this._activeSlide - 1;
      }
    }
  }

  private _forward(): void {
    if (this._slides.length) {
      if (this._activeSlide + 1 >= this._slides.length) {
        this.slide = this._slides.length - 1;
      } else if (this._activeSlide < 0) {
        this.slide = 0;
      } else {
        this.slide = this._activeSlide + 1;
      }
    }
  }
}
