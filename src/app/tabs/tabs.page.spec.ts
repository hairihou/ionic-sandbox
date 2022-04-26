import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabsPage } from './tabs.page';
import { TabsPageModule } from './tabs.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TabsPageModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
