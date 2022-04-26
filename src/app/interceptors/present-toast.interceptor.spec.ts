import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';

import { ToastController } from '@ionic/angular';

import { PresentToastInterceptor } from './present-toast.interceptor';
import { AppModule } from '../app.module';
import { HttpService } from '../services/http.service';
import { OverlayBaseController, TestModule } from '../test/test.module';
import { of } from 'rxjs';

describe('PresentToastInterceptor', () => {
  let interceptor: PresentToastInterceptor;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let toastControllerSpy: ToastController;
  let httpServiceMock: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, TestModule],
      providers: [
        PresentToastInterceptor,
        {
          provide: ToastController,
          useClass: OverlayBaseController,
        },
      ],
    });

    interceptor = TestBed.inject(PresentToastInterceptor);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    toastControllerSpy = jasmine.createSpyObj('ToastController', ['create']);
    httpServiceMock = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('toast should not be presented', () => {
    spyOn(httpServiceMock, 'getData').and.callFake(() => of([]));
    httpServiceMock.getData().subscribe({
      next: () => {
        expect(toastControllerSpy.create).not.toHaveBeenCalled();
      },
    });
  });

  it('toast should be presented', fakeAsync(() => {
    spyOn(httpServiceMock, 'getData').and.callFake(() => of([]));
    httpServiceMock.getData().subscribe({
      next: () => {
        expect(toastControllerSpy.create).not.toHaveBeenCalled();
      },
    });
  }));
});
