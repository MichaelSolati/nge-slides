import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SlideBase } from '../slide-base';

@Component({
  selector: 'nge-slide-section',
  templateUrl: './slide-section.component.html',
  styleUrls: ['./slide-section.component.scss']
})
export class SlideSectionComponent extends SlideBase {
  constructor(_ds: DomSanitizer) {
    super(_ds);
  }

  static get selector(): string {
    return 'nge-slide-section';
  }
}
