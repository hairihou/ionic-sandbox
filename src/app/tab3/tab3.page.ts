import { Component, OnInit } from '@angular/core';

import { finalize } from 'rxjs';

import { InfiniteScrollCustomEvent, ModalController, Platform, RefresherCustomEvent } from '@ionic/angular';

import { SampleListItem } from '../interfaces/sample-data.interface';
import { SlideImagePage } from './modals/slide-image/slide-image.page';
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

  constructor(private modalController: ModalController, private platform: Platform, private tabsService: TabsService) {}

  ngOnInit(): void {
    this.loadData([]);
  }

  heightFn(): number {
    return this.platform.is('ios') ? 46 : 56;
  }

  async presentModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: SlideImagePage,
    });
    return modal.present();
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
