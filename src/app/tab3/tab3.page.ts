import { Component, OnInit } from '@angular/core';

import { TabsService } from '../tabs/services/tabs.service';
import { SampleData } from '../interfaces/sample-data.interface';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  title = 'Tab3';
  sampleData: SampleData[];
  skeletonList = [...Array(100)];

  constructor(private tabsService: TabsService) {}

  ngOnInit(): void {
    this.tabsService.getSampleData().subscribe({
      next: (response) => {
        this.sampleData = response;
      },
    });
  }
}
