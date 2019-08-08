import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDealsRoutingModule } from './create-deals-routing.module';
import { CreateDealsComponent } from './create-deals.component';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
declarations: [CreateDealsComponent],
  imports: [
    CommonModule,
    CreateDealsRoutingModule,
    AppMaterialModule,
    FormsModule
  ]
})
export class CreateDealsModule { }
