import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SlideBase } from '../slide-base';

@Component({
  selector: 'nge-slide-title',
  templateUrl: './slide-title.component.html',
  styleUrls: ['./slide-title.component.scss']
})
export class SlideTitleComponent extends SlideBase {
  private _subtitle: string;
  @Input('subtitle') set subtitle(value: string) {
    this._subtitle = value;
  }

  constructor(_ds: DomSanitizer) {
    super(_ds);
  }

  get subtitle(): string {
    return this._subtitle;
  }
}
