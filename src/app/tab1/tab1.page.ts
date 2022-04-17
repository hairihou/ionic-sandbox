import { Component, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { IonContent, ViewWillEnter, ViewWillLeave } from '@ionic/angular';

import { TabsService } from '../tabs/services/tabs.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements ViewWillEnter, ViewWillLeave {
  @ViewChild(IonContent) content: IonContent;

  tab$ = new Subscription();

  constructor(private tabsService: TabsService) {}

  ionViewWillEnter(): void {
    this.tab$ = this.tabsService.tabChangeEvent$.subscribe({
      next: (tab) => {
        if (tab === 'tab1') {
          this.content.scrollToTop().then();
        }
      },
    });
  }

  ionViewWillLeave(): void {
    this.tab$.unsubscribe();
  }
}
