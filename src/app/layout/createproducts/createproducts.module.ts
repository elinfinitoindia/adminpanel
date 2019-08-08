import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateproductsRoutingModule } from './createproducts-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { CreateproductsComponent } from './createproducts.component';

@NgModule({
  declarations: [CreateproductsComponent],
  imports: [
    CommonModule,
    CreateproductsRoutingModule,
    AppMaterialModule,
    FormsModule
  ]
})
export class CreateproductsModule { }
