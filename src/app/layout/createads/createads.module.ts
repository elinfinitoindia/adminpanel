import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateadsRoutingModule } from './createads-routing.module';
import { CreateadsComponent } from './createads.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateadsComponent],
  imports: [
    CommonModule,
    CreateadsRoutingModule,
    AppMaterialModule,
    FormsModule
  ]
})
export class CreateadsModule { }
