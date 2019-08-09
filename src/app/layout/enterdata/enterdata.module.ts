import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterdataRoutingModule } from './enterdata-routing.module';
import { EnterdataComponent } from './enterdata.component';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';

@NgModule({
  declarations: [EnterdataComponent],
  imports: [
    CommonModule,
    EnterdataRoutingModule,
    FormsModule,
    AppMaterialModule
  ]
})
export class EnterdataModule { }
