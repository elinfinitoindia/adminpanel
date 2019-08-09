import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { EditadsComponent } from './editads/editads.component';

const routes: Routes = [
  {
    path:':id',
    component: EditComponent
  },
  {
    path:'editproducts/:id',
    component:EditproductsComponent
  },
  {
    path:'editads/:id',
    component:EditadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
