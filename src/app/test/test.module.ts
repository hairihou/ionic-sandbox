/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable, NgModule } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import {
//   HttpClientModule,
//   HttpHandler,
//   HttpRequest,
//   HttpEvent,
//   HttpResponse,
//   HttpInterceptor,
//   HTTP_INTERCEPTORS,
// } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable, of } from 'rxjs';

import { provideMockStore } from '@ngrx/store/testing';

import { IonRouterOutlet, LoadingController, ModalController, ToastController } from '@ionic/angular';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return of(new HttpResponse({ status: 200, body: {} }));
  }
}

@Injectable({
  providedIn: 'root',
})
export class OverlayBaseController {
  async create(options?: any): Promise<any> {
    return {
      present: (): void => {},
      dismiss: (): void => {},
    };
  }

  dismiss(data?: any, role?: string, id?: string): Promise<boolean> {
    return undefined;
  }

  getTop(): Promise<HTMLElement | undefined> {
    return undefined;
  }
}

@NgModule({
  imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
  providers: [
    provideMockStore(),
    {
      provide: IonRouterOutlet,
      useValue: {
        nativeEl: '',
      },
    },
    {
      provide: LoadingController,
      useClass: OverlayBaseController,
    },
    {
      provide: ModalController,
      useClass: OverlayBaseController,
    },
    {
      provide: ToastController,
      useClass: OverlayBaseController,
    },
  ],
})
export class TestModule {}
