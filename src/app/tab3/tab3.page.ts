import { Component, OnInit } from '@angular/core';

import { TabsService } from '../tabs/services/tabs.service';
import { SampleData } from '../interfaces/sample-data.interface';
import { InfiniteScrollCustomEvent, RefresherCustomEvent } from '@ionic/angular';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  title = 'Tab3';
  sampleData: SampleData[];
  skeletonList = [...Array(20)];

  constructor(private tabsService: TabsService) {}

  ngOnInit(): void {
    this.loadData([]);
  }

  loadData(items: SampleData[], event: RefresherCustomEvent | InfiniteScrollCustomEvent = undefined): void {
    this.tabsService
      .getSampleData()
      .pipe(
        finalize(() => {
          event?.target.complete().then();
        })
      )
      .subscribe({
        next: (response) => {
          this.sampleData = items.concat(response);
        },
        error: () => {
          this.sampleData = [];
        },
      });
  }
}
