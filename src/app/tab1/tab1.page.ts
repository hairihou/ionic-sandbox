import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { DatetimeCustomEvent, IonContent, ViewWillEnter, ViewWillLeave } from '@ionic/angular';

import { format, parseISO } from 'date-fns';

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

  constructor(private tabsService: TabsService) {}

  ngOnInit(): void {
    console.log(Date.now());
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

  changeDate(event: DatetimeCustomEvent): void {
    console.log(event.detail.value);
    console.log(parseISO(event.detail.value));
    console.log(parseISO(event.detail.value).toISOString());
    console.log(new Date(event.detail.value));
    console.log(new Date(event.detail.value).toISOString());
  }
}
