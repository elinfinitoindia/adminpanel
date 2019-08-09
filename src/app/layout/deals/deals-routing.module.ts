import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealsComponent } from './deals.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AdslistComponent } from './adslist/adslist.component';

const routes: Routes = [
  {
    path:'',
    component:DealsComponent
  },
  {
    path:'products',
    component:ProductlistComponent 
  },
  {
    path:'ads',
    component:AdslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealsRoutingModule { }
