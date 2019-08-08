import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateadsRoutingModule } from './createads-routing.module';
import { CreateadsComponent } from './createads.component';

@NgModule({
  declarations: [CreateadsComponent],
  imports: [
    CommonModule,
    CreateadsRoutingModule
  ]
})
export class CreateadsModule { }
