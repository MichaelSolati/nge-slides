import { Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

export class SlideBase {
  private _backgroundImg: string;
  @Input('background-image') set backgroundImg(value: string) {
    this._backgroundImg = value;
  }

  private _content = true;
  @Input() set content(value: boolean) {
    if (typeof value === 'string' && value === 'false') {
      this._content = false;
    } else {
      this._content = Boolean(value);
    }
  }

  private _show = false;
  @Input() set show(value: boolean) {
    if (typeof value === 'string' && value === 'false') {
      this._show = false;
    } else {
      this._show = Boolean(value);
    }
  }

  private _title: string;
  @Input() set title(value: string) {
    this._title = value;
  }

  constructor(private _sanitizer: DomSanitizer) { }

  get content(): boolean {
    return this._content;
  }

  get show(): boolean {
    return this._show;
  }

  get title(): string {
    return this._title;
  }

  public backgroundImage(): SafeStyle | boolean {
    if (this._backgroundImg) {
      return this._sanitizer.bypassSecurityTrustStyle('url(' + this._backgroundImg + ')');
    } else {
      return false;
    }
  }
}
