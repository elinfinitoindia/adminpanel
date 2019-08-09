import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { EditComponent } from '../edit/edit.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { EditadsComponent } from './editads/editads.component';

@NgModule({
  declarations: [EditComponent, EditproductsComponent, EditadsComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    AppMaterialModule,
    FormsModule
  ]
})
export class EditModule { }
