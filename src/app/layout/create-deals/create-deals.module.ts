import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDealsRoutingModule } from './create-deals-routing.module';
import { CreateDealsComponent } from './create-deals.component';

@NgModule({
declarations: [CreateDealsComponent],
  imports: [
    CommonModule,
    CreateDealsRoutingModule
  ]
})
export class CreateDealsModule { }
