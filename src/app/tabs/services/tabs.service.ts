import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  tabChange = new Subject<string>();
  tabChange$ = this.tabChange.asObservable();

  constructor() {}

  updateTab(tab: string): void {
    this.tabChange.next(tab);
  }
}
