import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSliderModule, MatGridListModule, MatTableModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatGridListModule,
    MatTableModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class AppMaterialModule { }
