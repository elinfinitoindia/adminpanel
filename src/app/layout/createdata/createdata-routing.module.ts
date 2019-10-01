import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatebrandComponent } from './createbrand/createbrand.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { CreatestoresComponent } from './createstores/createstores.component';

const routes: Routes = [
  {
    path: 'brand',
    component: CreatebrandComponent
  },
  {
    path: 'category',
    component: CreatecategoryComponent
  },
  {
    path: 'stores',
    component: CreatestoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatedataRoutingModule {}
