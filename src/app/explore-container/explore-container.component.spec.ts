import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExploreContainerComponent } from './explore-container.component';
import { ExploreContainerComponentModule } from './explore-container.module';

describe('ExploreContainerComponent', () => {
  let component: ExploreContainerComponent;
  let fixture: ComponentFixture<ExploreContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
