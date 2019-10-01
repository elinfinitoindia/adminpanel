import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedataRoutingModule } from './createdata-routing.module';
import { CreatebrandComponent } from './createbrand/createbrand.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { CreatestoresComponent } from './createstores/createstores.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';

@NgModule({
  declarations: [CreatebrandComponent, CreatecategoryComponent, CreatestoresComponent],
  imports: [CommonModule, CreatedataRoutingModule, AppMaterialModule]
})
export class CreatedataModule {}
