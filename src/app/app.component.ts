import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    { title: 'Tab1', url: '/tabs/tab1', icon: 'triangle' },
    { title: 'Tab2', url: '/tabs/tab2', icon: 'ellipse' },
    { title: 'Tab3', url: '/tabs/tab3', icon: 'square' },
  ];
  labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private platform: Platform) {}

  isIos(): boolean {
    return this.platform.is('ios');
  }
}
