import { Injectable } from '@angular/core';

import { delay, finalize, Observable, of, Subject, take, timer } from 'rxjs';

import { ToastController } from '@ionic/angular';

import { SampleData } from '../../interfaces/sample-data.interface';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  tabChange = new Subject<string>();
  tabChange$ = this.tabChange.asObservable();

  constructor(private toastController: ToastController) {}

  updateTab(tab: string): void {
    this.tabChange.next(tab);
  }

  getSampleData(): Observable<SampleData[]> {
    const sampleData: SampleData[] = [...Array(100)].map((_, index) => ({
      id: index + 1,
      name: Math.random().toString(32).substring(2),
      score: (index + 1) * 1000,
    }));
    const subscription = timer(3000)
      .pipe(take(1))
      .subscribe({
        next: async () => {
          const toast = await this.toastController.create({
            color: 'dark',
            duration: 2000,
            message: '処理に時間がかかっています',
          });
          await toast.present();
        },
      });
    return of(sampleData).pipe(
      delay(10000),
      finalize(() => {
        subscription.unsubscribe();
      })
    );
  }
}
