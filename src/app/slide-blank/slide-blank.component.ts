import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'nge-slide-blank',
  templateUrl: './slide-blank.component.html',
  styleUrls: ['./slide-blank.component.scss']
})
export class SlideBlankComponent {
  private _backgroundImg: string;
  @Input('background-image') set backgroundImg(value: string) {
    this._backgroundImg = value;
  }

  private _show = false;
  @Input() set show(value: boolean) {
    this._show = (typeof value === 'string' && value === 'false') ? false : Boolean(value);
  }

  constructor(private _sanitizer: DomSanitizer) { }

  get show(): boolean {
    return this._show;
  }

  public backgroundImage(): SafeStyle | boolean {
    return (this._backgroundImg) ? this._sanitizer.bypassSecurityTrustStyle('url(' + this._backgroundImg + ')') : false;
  }
}
