import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { SlideTitleComponent } from './slide-title/slide-title.component';
import { SlidesWrapperComponent } from './slides-wrapper/slides-wrapper.component';

const COMPONENTS: any[] = [
  SlideTitleComponent,
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
