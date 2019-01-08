import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { COMPONENTS, SELECTORS } from './COMPONENTS';

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
    COMPONENTS.forEach(c => customElements.define(SELECTORS[c.name], createCustomElement(c, { injector: this._injector })));
  }
}
