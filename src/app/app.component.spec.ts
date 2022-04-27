import { TestBed, waitForAsync } from '@angular/core/testing';

import { Platform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TestModule } from './test/test.module';

class BackButtonMock {
  subscribeWithPriority: jasmine.Spy<any>;
}

class PlatformMock {
  ready: jasmine.Spy<any>;
  backButton: any;

  is(platformName: any): boolean {
    return true;
  }
}

describe('AppComponent', () => {
  let platformMock: Platform;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, TestModule],
      providers: [
        {
          provide: Platform,
          useClass: PlatformMock,
        },
      ],
    }).compileComponents();

    platformMock = TestBed.inject(Platform);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('isIos return true', () => {
    spyOn(platformMock, 'is').and.callFake(() => true);
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.isIos()).toBeTruthy();
  });
});
