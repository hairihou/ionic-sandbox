import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeTitleHeaderDirective } from './large-title-header.directive';

@Component({
  selector: 'app-test-component',
  template: `
    <ion-header appLargeTitleHeader>
      <ion-toolbar></ion-toolbar>
      <ion-toolbar></ion-toolbar>
      <ion-toolbar></ion-toolbar>
    </ion-header>
  `,
})
class TestComponent {}

describe('LargeTitleHeaderDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  it('should create an instance', () => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
