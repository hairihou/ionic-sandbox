import { Component } from '@angular/core';

import { TabsService } from './services/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private tabsService: TabsService) {}

  onTabChanged(tab: string): void {
    this.tabsService.updateTab(tab);
  }
}
