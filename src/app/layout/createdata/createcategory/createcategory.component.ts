import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Screen1Component } from '../../screen1/screen1.component';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.scss']
})
export class CreatecategoryComponent implements OnInit {
  category: any = [];
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.category = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  }

  createCategoryDialog() {
    const dialogRef = this.dialog.open(Screen1Component, {
      data: { name: 'Category' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
