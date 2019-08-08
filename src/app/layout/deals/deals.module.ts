import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';

@NgModule({
  declarations: [DealsComponent],
  imports: [
    CommonModule,
    DealsRoutingModule,
    AppMaterialModule
  ]
})
export class DealsModule { }
