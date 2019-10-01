import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateproductsComponent } from './createproducts.component';
import { DeactivateGuardService } from 'src/app/shared/services/deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CreateproductsComponent,
    canDeactivate: [DeactivateGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateproductsRoutingModule {}
