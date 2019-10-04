import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { EditadsComponent } from './editads/editads.component';
import { DeactivateGuardService } from 'src/app/shared/services/deactivate-guard.service';
import { EditdealService } from 'src/app/shared/services/editdeal.service';

const routes: Routes = [
  {
    path: ':id',
    component: EditComponent,
    canDeactivate: [DeactivateGuardService],
    resolve: { resolvedData: EditdealService }
  },
  {
    path: 'editproducts/:id',
    component: EditproductsComponent,
    canDeactivate: [DeactivateGuardService]
  },
  {
    path: 'editads/:id',
    component: EditadsComponent,
    canDeactivate: [DeactivateGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule {}
