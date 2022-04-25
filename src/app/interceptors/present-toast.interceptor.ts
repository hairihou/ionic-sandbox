import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { finalize, Observable, timer } from 'rxjs';

import { ToastController } from '@ionic/angular';

@Injectable()
export class PresentToastInterceptor implements HttpInterceptor {
  constructor(private toastController: ToastController) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const subscription = timer(3000).subscribe({
      next: async () => {
        const toast = await this.toastController.create({
          color: 'dark',
          duration: 2000,
          message: 'wait a minute...',
        });
        await toast.present();
      },
    });
    return next.handle(request).pipe(
      finalize(() => {
        subscription.unsubscribe();
      })
    );
  }
}
