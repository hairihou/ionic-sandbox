import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { concatMap, Observable, of, Subject, timer } from 'rxjs';

import { SampleData } from '../../interfaces/sample-data.interface';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  tabChange$: Observable<string>;
  private tabChange = new Subject<string>();

  constructor(private httpClient: HttpClient) {
    this.tabChange$ = this.tabChange.asObservable();
  }

  updateTab(tab: string): void {
    this.tabChange.next(tab);
  }

  getSampleData(offset: number): Observable<SampleData[]> {
    return offset >= 100000
      ? of([])
      : timer(3000).pipe(
          concatMap(() =>
            of(
              [...Array(50)].map((_, index) => ({
                id: index + offset + 1,
                imageId: (index + offset + 1) % 70,
                name: Math.random().toString(32).substring(2),
                score: (index + offset + 1) * 1000,
              }))
            )
          )
        );
  }

  getSampleImage(imageId: number): Observable<Blob> {
    const url = `https://i.pravatar.cc/150?img=${imageId}`;
    return this.httpClient.get(url, {
      responseType: 'blob',
    });
  }
}
