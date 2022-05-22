import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { LargeTitleHeaderDirective } from '../directives/large-title-header.directive';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ScrollingModule, TabsPageRoutingModule],
  declarations: [TabsPage, Tab1Page, Tab2Page, Tab3Page, ExploreContainerComponent, LargeTitleHeaderDirective],
  exports: [ExploreContainerComponent],
})
export class TabsPageModule {}
