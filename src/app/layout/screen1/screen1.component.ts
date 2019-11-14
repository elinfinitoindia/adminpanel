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
  images: any = [];
  isSubStore: boolean = false;
  parentStore;
  storeLogoName;
  CatType;
  LogoName;
  Url;
  isStore:boolean = true;

  @ViewChild('categoryForm') categoryForm: NgForm;
  constructor(
    public dialogRef: MatDialogRef<Screen1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService
  ) {
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      // this.categoryForm.reset();
    });
  }

  ngOnInit() {
    this.item = this.data.name;
    console.log(this.item);
    if (this.item == 'Brand') {
        this.dataService.listFiles().then(response => {
          this.images = response.Contents.map(data => {
            const row: any = {};
            row.url = this.dataService.getUrl(data.Key);
            row.key = data.Key.split('/').pop();
            row.year = data.LastModified.getUTCFullYear();
            return row;
          });
        });
    } else if (this.item == 'Category') {
    } else if (this.item == 'Store') {
      this.dataService.getMajorCategories().subscribe((res: any) => {
        this.categoryList = res;
        console.log(this.categoryList);
      });
      this.dataService.listFiles().then(response => {
        this.images = response.Contents.map(data => {
          const row: any = {};
          row.url = this.dataService.getUrl(data.Key);
          row.key = data.Key.split('/').pop();
          row.year = data.LastModified.getUTCFullYear();
          return row;
        });
      });
      console.log(this.images);
      
    }
  }

  addUrl(Name, Url) {
    var element = {
      Name: Name,
      Url: Url
    };
    console.log(element);
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
    if (data == 3) {
      this.isSubStore = true;
      this.dataService.getFeatureSubCategory().subscribe((res: any) => {
        console.log(res);
        this.parentStore = res;
      });
    } else if(data == 1){
       
      this.isStore = false;
    }
    else{
          this.isSubStore = false;
        }
        if(data == 2 ){
this.dataService.getMajorCategories().subscribe((res:any)=>{
  this.storeList = res;
})
this.dataService.getStoreLogoName().subscribe((res: any) => {
  this.storeLogoName = res;
});
        }
    
  }

  changeParentCategory(data){
 this.dataService.getCategories(data).subscribe((res: any) => {
   this.storeList = res;
 });
 this.dataService.getStoreLogoName().subscribe((res:any)=>{
   this.storeLogoName = res;
 })
  }

  createStore(data) {
    data.Url = this.storeUrl;
    data.Logo = 'https://appimageselinfinito.s3.us-east-2.amazonaws.com/' + data.Logo;
    this.dataService.createStore(data).subscribe((res:any)=>{
      console.log(res);
      this.dialogRef.close(res);

    })
    console.log(data);
    
  }

  doSomething() {}
}
