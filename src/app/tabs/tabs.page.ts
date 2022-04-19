import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';

import { TabsService } from './services/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  isMobileApp = false;

  constructor(private platform: Platform, private tabsService: TabsService) {}

  ngOnInit(): void {
    this.isMobileApp = this.platform.is('hybrid');
  }

  onTabChanged(tab: string): void {
    this.tabsService.updateTab(tab);
  }
}
