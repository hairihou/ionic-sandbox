import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { finalize } from 'rxjs';

import { InfiniteScrollCustomEvent, ModalController, Platform, RefresherCustomEvent } from '@ionic/angular';

import { SampleListItem } from '../core/interfaces/sample-data.interface';
import { TabsService } from '../tabs/services/tabs.service';
import { VirtualContentPage } from './modals/virtual-content/virtual-content.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) virtualScrollViewport: CdkVirtualScrollViewport;
  readonly title = 'Tab3';
  refresherDisabled = true;
  infiniteScrollDisabled = true;
  sampleList: SampleListItem[];
  skeletonList = [...Array(50)];

  constructor(private modalController: ModalController, private platform: Platform, private tabsService: TabsService) {}

  ngOnInit(): void {
    this.loadData([]);
  }

  async presentModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: VirtualContentPage,
    });
    return modal.present();
  }

  scrollFn(event: MouseEvent): void {
    const { clientX, clientY } = event;
    this.virtualScrollViewport.scrollTo({ top: clientY - 96, left: clientX });
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
