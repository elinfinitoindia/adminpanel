import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { AdslistComponent } from './adslist/adslist.component';

@NgModule({
  declarations: [DealsComponent, ProductlistComponent, AdslistComponent],
  imports: [CommonModule, DealsRoutingModule, AppMaterialModule],
  exports: [DealsComponent]
})
export class DealsModule {}
