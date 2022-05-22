import { Component, OnInit } from '@angular/core';

import { finalize } from 'rxjs';

import { InfiniteScrollCustomEvent, RefresherCustomEvent } from '@ionic/angular';

import { SampleListItem } from '../interfaces/sample-data.interface';
import { TabsService } from '../tabs/services/tabs.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  readonly title = 'Tab3';
  refresherDisabled = true;
  infiniteScrollDisabled = true;
  sampleList: SampleListItem[];
  skeletonList = [...Array(10)];

  constructor(private tabsService: TabsService) {}

  ngOnInit(): void {
    this.loadData([]);
  }

  loadData(items: SampleListItem[], event: RefresherCustomEvent | InfiniteScrollCustomEvent = undefined): void {
    this.tabsService
      .getSampleList(items.length)
      .pipe(
        finalize(() => {
          event?.target.complete().then();
          this.refresherDisabled = false;
        })
      )
      .subscribe({
        next: (response) => {
          this.sampleList = items.concat(response);
          this.infiniteScrollDisabled = response.length === 0;
        },
        error: () => {
          if (items.length === 0) {
            this.sampleList = [];
            this.infiniteScrollDisabled = true;
          }
        },
      });
  }
}
