import { SlideComponent } from './slide/slide.component';
import { SlideBlankComponent } from './slide-blank/slide-blank.component';
import { SlideSectionComponent } from './slide-section/slide-section.component';
import { SlideTitleComponent } from './slide-title/slide-title.component';
import { SlidesProgressBarComponent } from './slides-progress-bar/slides-progress-bar.component';
import { SlidesWrapperComponent } from './slides-wrapper/slides-wrapper.component';

export { SlideComponent } from './slide/slide.component';
export { SlideBlankComponent } from './slide-blank/slide-blank.component';
export { SlideSectionComponent } from './slide-section/slide-section.component';
export { SlideTitleComponent } from './slide-title/slide-title.component';
export { SlidesProgressBarComponent } from './slides-progress-bar/slides-progress-bar.component';
export { SlidesWrapperComponent } from './slides-wrapper/slides-wrapper.component';

export const COMPONENTS: any[] = [
  SlideComponent,
  SlideBlankComponent,
  SlideSectionComponent,
  SlideTitleComponent,
  SlidesProgressBarComponent,
  SlidesWrapperComponent
];

export enum SELECTORS {
  SlideComponent = 'nge-slide',
  SlideBlankComponent = 'nge-slide-blank',
  SlideSectionComponent = 'nge-slide-section',
  SlideTitleComponent = 'nge-slide-title',
  SlidesProgressBarComponent = 'nge-slides-progress-bar',
  SlidesWrapperComponent = 'nge-slides-wrapper',
}

export const SLIDE_COMPONENTS: any[] = [
  SlideComponent,
  SlideBlankComponent,
  SlideSectionComponent,
  SlideTitleComponent,
];
