import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'nge-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SlideComponent {
  private _backgroundImg: string;
  @Input('background-image') set backgroundImg(value: string) {
    this._backgroundImg = value;
    this._cd.detectChanges();
  }

  private _content: string;
  @Input() set content(value: string) {
    this._content = value;
    this._cd.detectChanges();
  }

  private _show = false;
  @Input() set show(value: boolean) {
    this._show = (typeof value === 'string' && value === 'false') ? false : Boolean(value);
    this._cd.detectChanges();
  }

  private _subtitle: string;
  @Input('subtitle') set subtitle(value: string) {
    this._subtitle = value;
    this._cd.detectChanges();
  }

  private _title: string;
  @Input() set title(value: string) {
    this._title = value;
    this._cd.detectChanges();
  }

  private _type: string;
  @Input() set type(value: string) {
    this._type = value.toLowerCase();
    this._cd.detectChanges();
  }

  constructor(private _cd: ChangeDetectorRef, private _sanitizer: DomSanitizer) { }

  get content(): string {
    return this._content;
  }

  get show(): boolean {
    return this._show;
  }

  get subtitle(): string {
    return this._subtitle;
  }

  get title(): string {
    return this._title;
  }

  get type(): string {
    return this._type;
  }

  public backgroundImage(): SafeStyle | boolean {
    return (this._backgroundImg) ? this._sanitizer.bypassSecurityTrustStyle('url(' + this._backgroundImg + ')') : false;
  }
}
