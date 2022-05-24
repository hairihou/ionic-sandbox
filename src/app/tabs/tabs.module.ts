import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { CoreModule } from '../core/core.module';
import { ExploreContainerComponent } from '../tab1/components/explore-container/explore-container.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule, CoreModule],
  declarations: [TabsPage, Tab1Page, Tab2Page, ExploreContainerComponent],
  exports: [ExploreContainerComponent],
})
export class TabsPageModule {}
