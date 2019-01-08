import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SlideBase } from '../shared/slide-base';

@Component({
  selector: 'nge-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent extends SlideBase {
  private _content: string;
  @Input() set content(value: string) {
    this._content = value;
  }

  constructor(_ds: DomSanitizer) {
    super(_ds);
  }

  static get selector(): string {
    return 'nge-slide';
  }

  get content(): string {
    return this._content;
  }
}
