import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatFormFieldAppearance } from '@angular/material';
import { DataService } from 'src/app/shared/services/data.service';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
  brand: boolean = true;
  item: string;
  appearance: MatFormFieldAppearance = 'outline';
  selected = '1';
  storeUrl: any = [];
  category: Category;
  isSubCategory: boolean = false;
  subcats: Category[];
  categoryList: any = [];
  storeList: any = [];
  @ViewChild('categoryForm') categoryForm: NgForm;
  constructor(
    public dialogRef: MatDialogRef<Screen1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService
  ) {
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      this.categoryForm.reset();
    });
  }

  ngOnInit() {
    this.item = this.data.name;
    console.log(this.item);
    if (this.item == 'Brand') {
    } else if (this.item == 'Category') {
    } else if (this.item == 'Store') {
      this.dataService.getMajorCategories().subscribe((res: any) => {
        this.categoryList = res;
        console.log(this.categoryList);
      });

      this.dataService.getCategories().subscribe((res: any) => {
        this.storeList = res;
      });
    }
  }

  addUrl(data, Url) {
    var element = {
      Name: data,
      Url: Url
    };
    this.storeUrl.push(element);
  }

  removeUrl(data) {
    let item = this.storeUrl.findIndex(x => x.Name == data);
    if (item >= 0) {
      this.storeUrl.splice(item, 1);
    }
  }
  createCategory(data) {
    this.dataService.createCategories(data).subscribe((res: any) => {
      console.log(res);
      this.categoryForm.reset();
      this.dialogRef.close(res);
    });
  }
  changedSelection(data) {
    console.log('changed event ' + data);
    if (data == 2) {
      this.isSubCategory = true;
      this.dataService.getSubCategory().subscribe((res: any) => {
        console.log(res);
        this.subcats = res;
      });
    } else this.isSubCategory = false;
  }
}
