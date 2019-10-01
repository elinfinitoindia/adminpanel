import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateadsComponent } from './createads.component';
import { DeactivateGuardService } from 'src/app/shared/services/deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CreateadsComponent,
    canDeactivate: [DeactivateGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateadsRoutingModule {}
