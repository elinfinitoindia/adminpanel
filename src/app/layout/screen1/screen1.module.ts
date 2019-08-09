import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen1Component } from './screen1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Screen1RoutingModule } from './screen1-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Screen1Component],
  imports: [
    CommonModule,
    Screen1RoutingModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    AppMaterialModule,
    FormsModule
  ]
})
export class Screen1Module { }
