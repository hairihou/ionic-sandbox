import { Injectable } from '@angular/core';

import { concatMap, Observable, of, Subject, timer } from 'rxjs';

import { SampleData } from '../../interfaces/sample-data.interface';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  tabChange$: Observable<string>;
  private tabChange = new Subject<string>();

  constructor() {
    this.tabChange$ = this.tabChange.asObservable();
  }

  updateTab(tab: string): void {
    this.tabChange.next(tab);
  }

  getSampleData(): Observable<SampleData[]> {
    const sampleData: SampleData[] = [...Array(200)].map((_, index) => ({
      id: index + 1,
      imageId: (index + 1) % 70,
      name: Math.random().toString(32).substring(2),
      score: (index + 1) * 1000,
    }));
    return timer(3000).pipe(concatMap(() => of(sampleData)));
  }

  getSampleImage(): Observable<SampleData[]> {
    const sampleData: SampleData[] = [...Array(200)].map((_, index) => ({
      id: index + 1,
      imageId: (index + 1) % 70,
      name: Math.random().toString(32).substring(2),
      score: (index + 1) * 1000,
    }));
    return of(sampleData);
  }
}
