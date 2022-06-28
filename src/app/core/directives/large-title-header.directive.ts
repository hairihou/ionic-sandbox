import { Directive, ElementRef, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';

@Directive({
  selector: '[appLargeTitleHeader]',
})
export class LargeTitleHeaderDirective implements OnInit {
  constructor(private elementRef: ElementRef, private platform: Platform) {}

  ngOnInit(): void {
    if (this.elementRef.nativeElement.tagName === 'ION-HEADER') {
      this.elementRef.nativeElement.mode = !this.platform.is('ios') ? 'ios' : undefined;
      const ionToolbars = this.elementRef.nativeElement.querySelectorAll('ion-toolbar');
      ionToolbars.forEach((t) => {
        t.mode = !this.platform.is('ios') ? 'md' : undefined;
      });
    }
  }
}
