import {
  AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy, Component, ContentChild,
  ContentChildren, ElementRef, forwardRef, HostListener, Input, QueryList, ViewChild, ViewEncapsulation
} from '@angular/core';

import { SlidesModule } from '../slides.module';
import { SlideComponent } from '../slide/slide.component';
import { SlidesProgressBarComponent } from '../slides-progress-bar/slides-progress-bar.component';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SlidesWrapperComponent implements AfterViewInit {
  private _activeSlide = 0;

  private _handle: string;
  @Input() set handle(value: string) {
    this._handle = value;
    this._cd.detectChanges();
  }
  private _hashtag: string;
  @Input() set hashtag(value: string) {
    this._hashtag = value;
    this._cd.detectChanges();
  }

  private _progressBar: SlidesProgressBarComponent;
  @ContentChild(forwardRef(() => SlidesProgressBarComponent)) private _progressBarNg: SlidesProgressBarComponent;

  private _slides: SlideComponent[] = [];
  @ContentChildren(forwardRef(() => SlideComponent)) private _slidesNg: QueryList<SlideComponent>;

  @ViewChild('slidesWrapper') private _slidesWrapper: ElementRef;

  constructor(private _cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    if (SlidesModule.isAngular) {
      this._bootstrapAngular();
    } else {
      this._bootstrapElements();
    }

    if (this._progressBar) {
      this._progressBar.wrapper = this;
    }

    this._slides.forEach((slide) => slide.show = false);

    if (window.location.hash) {
      const hash = Number(window.location.hash.replace('#', ''));
      this.slide = (!isNaN(hash) && hash > 0 && hash <= this._slides.length && this._slides.length) ? hash : 0;
    } else if (this._slides.length) {
      this.slide = 0;
    }
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

      if (this._progressBar) {
        this._progressBar.count = this._slides.length;
        this._progressBar.active = this._activeSlide;
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

  private _bootstrapAngular(): void {
    this._slides = this._slidesNg.toArray();
    this._progressBar = this._progressBarNg;
  }

  private _bootstrapElements(): void {
    const dom = this._slidesWrapper.nativeElement as HTMLElement;
    this._slides = <SlideComponent[]><any[]>Array.from(dom.querySelectorAll('nge-slide'));
    this._progressBar = <SlidesProgressBarComponent><any>dom.querySelector('nge-slides-progress-bar');
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
