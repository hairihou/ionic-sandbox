import { Component, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { IonContent, Platform, ViewWillEnter, ViewWillLeave } from '@ionic/angular';

import { TabsService } from '../tabs/services/tabs.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements ViewWillEnter, ViewWillLeave {
  @ViewChild(IonContent) content: IonContent;

  title = 'Tab1';
  isIos = false;
  tab$ = new Subscription();

  constructor(private platform: Platform, private tabsService: TabsService) {
    this.isIos = platform.is('ios');
  }

  ionViewWillEnter(): void {
    this.tab$ = this.tabsService.tabChange$.subscribe({
      next: (tab) => {
        if (tab === 'tab1') {
          this.content.scrollToTop(100).then();
        }
      },
    });
  }

  ionViewWillLeave(): void {
    this.tab$.unsubscribe();
  }
}
