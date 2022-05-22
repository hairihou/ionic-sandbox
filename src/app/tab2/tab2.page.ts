import { Component, OnInit } from '@angular/core';

import { finalize } from 'rxjs';

import { InfiniteScrollCustomEvent, RefresherCustomEvent } from '@ionic/angular';

import { SampleWiki } from '../interfaces/sample-data.interface';
import { TabsService } from '../tabs/services/tabs.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  readonly title = 'Tab2';
  refresherDisabled = true;
  infiniteScrollDisabled = true;
  sampleWiki: SampleWiki[];
  skeletonWiki = [...Array(3)];

  constructor(private tabsService: TabsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(event: RefresherCustomEvent | InfiniteScrollCustomEvent = undefined): void {
    this.tabsService
      .getSampleWiki()
      .pipe(
        finalize(() => {
          event?.target.complete().then();
          this.refresherDisabled = false;
        })
      )
      .subscribe({
        next: (response) => {
          this.sampleWiki = response;
          this.infiniteScrollDisabled = response.length === 0;
        },
        error: () => {
          this.sampleWiki = [];
          this.infiniteScrollDisabled = true;
        },
      });
  }
}
