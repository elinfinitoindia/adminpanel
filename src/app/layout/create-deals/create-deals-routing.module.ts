import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDealsComponent } from './create-deals.component';

const routes: Routes = [
  {
    path:'',
    component:CreateDealsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDealsRoutingModule { }
