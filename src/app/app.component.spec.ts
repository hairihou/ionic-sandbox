import { TestBed, waitForAsync } from '@angular/core/testing';

import { Platform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TestModule } from './test/test.module';

describe('AppComponent', () => {
  let platformMock: Platform;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, TestModule],
    }).compileComponents();

    platformMock = TestBed.inject(Platform);
    platformMock.backButton = jasmine.createSpyObj('Platform', ['subscribeWithPriority']);
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
    expect(component.isIos()).toBeTrue();
  });

  it('isIos return false', () => {
    spyOn(platformMock, 'is').and.callFake(() => false);
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.isIos()).toBeFalse();
  });
});
