import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatFormFieldAppearance } from '@angular/material';
import { DataService } from 'src/app/shared/services/data.service';
import { NgForm } from '@angular/forms';

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

  @ViewChild('categoryForm') categoryForm: NgForm;
  constructor(
    public dialogRef: MatDialogRef<Screen1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.item = this.data.name;
    console.log(this.item);
    if (this.item == 'Brand') {
    } else if (this.item == 'Category') {
    } else if (this.item == 'store') {
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
    console.log(data);
  }
}
