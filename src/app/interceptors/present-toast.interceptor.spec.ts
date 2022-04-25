import { TestBed } from '@angular/core/testing';

import { ToastController, ToastOptions } from '@ionic/angular';

import { PresentToastInterceptor } from './present-toast.interceptor';
import { APP_BASE_HREF } from '@angular/common';
import { HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { firstValueFrom } from 'rxjs';

export class ToastControllerMock extends ToastController {
  create: (opts?: ToastOptions) => Promise<HTMLIonToastElement>;
  present: () => Promise<void>;
}

describe('PresentToastInterceptor', () => {
  let interceptor: PresentToastInterceptor;
  let handlerSpy: HttpHandler;
  let httpTestingController: HttpTestingController;
  const toastControllerMock = new ToastControllerMock();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PresentToastInterceptor,
        { provide: APP_BASE_HREF, useValue: '/test/' },
        {
          provide: ToastController,
          useValue: ToastControllerMock,
        },
      ],
    });

    interceptor = TestBed.inject(PresentToastInterceptor);
    handlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should replace appBaseHref', async () => {
    const request = new HttpRequest('GET', '/test/data');
    const result = await firstValueFrom(interceptor.intercept(request, handlerSpy));
    expect(result).toEqual(jasmine.any(HttpResponse));
  });
});
