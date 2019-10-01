import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDealsComponent } from './create-deals.component';
import { DeactivateGuardService } from 'src/app/shared/services/deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CreateDealsComponent,
    canDeactivate: [DeactivateGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDealsRoutingModule {}
