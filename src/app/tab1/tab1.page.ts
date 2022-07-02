import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { IonContent, ViewWillEnter, ViewWillLeave } from '@ionic/angular';

import { format } from 'date-fns';

import { HttpService } from '../core/services/http.service';
import { TabsService } from '../tabs/services/tabs.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, ViewWillEnter, ViewWillLeave {
  @ViewChild(IonContent) content: IonContent;

  date = format(new Date(), 'yyyy-MM-dd');
  minDate = format(new Date(0), 'yyyy-MM-dd');
  maxDate = format(new Date(), 'yyyy-MM-dd');
  readonly title = 'Tab1';
  tab$ = new Subscription();

  constructor(private httpService: HttpService, private tabsService: TabsService) {}

  ngOnInit(): void {}

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
