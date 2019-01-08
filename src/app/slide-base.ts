import { Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

export class SlideBase {
  private _backgroundImg: string;
  @Input('background-image') set backgroundImg(value: string) {
    this._backgroundImg = value;
  }

  private _show = false;
  @Input() set show(value: boolean) {
    this._show = (typeof value === 'string' && value === 'false') ? false : Boolean(value);
  }

  private _title: string;
  @Input() set title(value: string) {
    this._title = value;
  }

  constructor(private _sanitizer: DomSanitizer) { }

  get show(): boolean {
    return this._show;
  }

  get title(): string {
    return this._title;
  }

  public backgroundImage(): SafeStyle | boolean {
    return (this._backgroundImg) ? this._sanitizer.bypassSecurityTrustStyle('url(' + this._backgroundImg + ')') : false;
  }
}
