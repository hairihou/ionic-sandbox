import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LargeTitleHeaderDirective } from './directives/large-title-header.directive';

@NgModule({
  declarations: [LargeTitleHeaderDirective],
  imports: [CommonModule],
  exports: [LargeTitleHeaderDirective],
})
export class CoreModule {}
