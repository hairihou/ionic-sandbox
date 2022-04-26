import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Tab3Page } from './tab3.page';
import { Tab3PageModule } from './tab3.module';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Tab3PageModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
