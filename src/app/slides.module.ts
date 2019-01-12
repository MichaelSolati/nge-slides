import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { SlideComponent } from './slide/slide.component';
import { SlidesProgressBarComponent } from './slides-progress-bar/slides-progress-bar.component';
import { SlidesWrapperComponent } from './slides-wrapper/slides-wrapper.component';

const COMPONENTS = [
  SlideComponent,
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
    const elements: [any, string][] = [
      [SlideComponent, 'nge-slide'],
      [SlidesProgressBarComponent, 'nge-slides-progress-bar'],
      [SlidesWrapperComponent, 'nge-slides-wrapper']
    ];
    for (const [component, selector] of elements) {
      customElements.define(selector, createCustomElement(component, { injector: this._injector }));
    }
  }

  static get isAngular(): boolean {
    return false;
  }
}
