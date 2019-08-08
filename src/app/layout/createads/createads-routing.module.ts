import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateadsComponent } from './createads.component';

const routes: Routes = [
  {
    path:'',
    component:CreateadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateadsRoutingModule { }
