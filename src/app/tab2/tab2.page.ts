import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  title = 'Tab2';
  isIos = false;

  constructor(private platform: Platform) {
    this.isIos = platform.is('ios');
  }
}
