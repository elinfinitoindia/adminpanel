import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterdataComponent } from './enterdata.component';

const routes: Routes = [
  {
    path:'',
    component:EnterdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterdataRoutingModule { }
