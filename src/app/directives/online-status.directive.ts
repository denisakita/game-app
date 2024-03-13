import {AfterContentInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appOnlineStatus]',
  standalone: true,
  providers: []
})
export class OnlineStatusDirective implements AfterContentInit {
  @Input() public appOnlineStatus: boolean | undefined;

  constructor(
    private element: ElementRef<HTMLAnchorElement>
  ) {
  }

  public ngAfterContentInit() {
    if (this.appOnlineStatus === true) {
      this.element.nativeElement.innerHTML += '<i class = "bi bi-lighting-fill"></i>'
    }
  }
}
