import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { SlideComponent } from './slide/slide.component';
import { SlideBlankComponent } from './slide-blank/slide-blank.component';
import { SlideSectionComponent } from './slide-section/slide-section.component';
import { SlideTitleComponent } from './slide-title/slide-title.component';
import { SlidesProgressBarComponent } from './slides-progress-bar/slides-progress-bar.component';
import { SlidesWrapperComponent } from './slides-wrapper/slides-wrapper.component';

export const COMPONENTS: any[] = [
  SlideComponent,
  SlideBlankComponent,
  SlideSectionComponent,
  SlideTitleComponent,
  SlidesProgressBarComponent,
  SlidesWrapperComponent
];

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  entryComponents: COMPONENTS
})
export class SlidesModule {
  constructor(private _injector: Injector) { }

  ngDoBootstrap() {
    COMPONENTS.forEach(c => customElements.define(c.selector, createCustomElement(c, { injector: this._injector })));
  }
}
