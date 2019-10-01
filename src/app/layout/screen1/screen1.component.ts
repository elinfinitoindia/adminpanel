import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatFormFieldAppearance } from '@angular/material';

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
  constructor(public dialogRef: MatDialogRef<Screen1Component>, @Inject(MAT_DIALOG_DATA) public data: any) {}

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
}
