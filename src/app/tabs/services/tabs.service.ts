import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  tabChangeEvent = new Subject<string>();
  tabChangeEvent$ = this.tabChangeEvent.asObservable();

  constructor() {}

  updateTab(tab: string): void {
    this.tabChangeEvent.next(tab);
  }
}
