import { Component, OnInit } from '@angular/core';

import { finalize } from 'rxjs';

import { InfiniteScrollCustomEvent, RefresherCustomEvent } from '@ionic/angular';

import { SampleData } from '../interfaces/sample-data.interface';
import { TabsService } from '../tabs/services/tabs.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  title = 'Tab3';
  refresherDisabled = true;
  infiniteScrollDisabled = true;
  sampleData: SampleData[];
  skeletonList = [...Array(20)];

  constructor(private tabsService: TabsService) {}

  ngOnInit(): void {
    this.loadData([]);
  }

  loadData(items: SampleData[], event: RefresherCustomEvent | InfiniteScrollCustomEvent = undefined): void {
    this.tabsService
      .getSampleData(items.length)
      .pipe(
        finalize(() => {
          event?.target.complete().then();
          this.refresherDisabled = false;
        })
      )
      .subscribe({
        next: (response) => {
          this.sampleData = items.concat(response);
          this.infiniteScrollDisabled = response.length < 0;
        },
        error: () => {
          this.sampleData = [];
          this.infiniteScrollDisabled = true;
        },
      });
  }
}
