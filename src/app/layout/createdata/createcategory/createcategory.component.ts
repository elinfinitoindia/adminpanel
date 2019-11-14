import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatList } from '@angular/material';
import { Screen1Component } from '../../screen1/screen1.component';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.scss']
})
export class CreatecategoryComponent implements OnInit {
  category: any = [];
  copyCategory: any = [];
  @ViewChild('categorylist') categorylist: MatList;
  constructor(private dialog: MatDialog, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllCategories().subscribe((res: any) => {
      this.category = res;
      this.copyCategory = this.category;
    });
  }

  createCategoryDialog() {
    const dialogRef = this.dialog.open(Screen1Component, {
      data: { name: 'Category' }
    });
    console.log(dialogRef);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      // this.copyCategory.unshift(result);
    });
  }
}
