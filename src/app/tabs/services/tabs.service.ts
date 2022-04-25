import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';

import { SampleData } from '../../interfaces/sample-data.interface';

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

  getSampleData(): Observable<SampleData[]> {
    const sampleData: SampleData[] = [...Array(100)].map((_, index) => ({
      id: index + 1,
      name: Math.random().toString(32).substring(2),
      score: (index + 1) * 1000,
    }));
    return of(sampleData);
  }
}
