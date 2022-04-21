import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  title = 'Tab3';
  isIos = false;

  constructor(private platform: Platform) {
    this.isIos = platform.is('ios');
  }
}
