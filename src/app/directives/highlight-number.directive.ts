import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appHighlightNumber]'
})
export class HighlightNumberDirective {
  @HostBinding('style.color') color: string = 'inherit'

  constructor (private elementRef: ElementRef) {

  }

  @HostListener('DOMCharacterDataModified') highlight (eventData: Event) {
    this.color = parseInt(this.elementRef.nativeElement.innerText) >= 0 ? 'lightgreen' : 'salmon'
  }

}
