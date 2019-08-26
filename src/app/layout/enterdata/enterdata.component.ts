import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-enterdata',
  templateUrl: './enterdata.component.html',
  styleUrls: ['./enterdata.component.scss']
})
export class EnterdataComponent implements OnInit {
  brand: boolean = true;
  panelOpenState = false;
  image;
  imagePath;
  category: any = [];
  items: any = [];
  scategory: any = [];
  s3;
  images;
  selectedImage;
  store: any = [];

  constructor(private dataService: DataService, private sharedService: SharedService) {}

  ngOnInit() {
    this.dataService.getCategories().subscribe((res: any) => {
      let data = res;
      data.forEach(element => {
        if (element.CatType == 1) {
          this.scategory.push(element);
        }
      });
    });

    this.dataService
      .listFiles()
      .then(response => {
        this.images = response.Contents.map(data => {
          const row: any = {};
          row.url = this.dataService.getUrl(data.Key);
          row.key = data.Key.split('/').pop();
          row.year = data.LastModified.getUTCFullYear();
          return row;
        });
      })
      .catch(error => {});
  }

  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    // if (mimeType.match(/image\/*/) == null) {
    //   this.message = "Only images are supported.";
    //   return;
    // }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.image = reader.result;
    };
  }

  createCategory(data) {
    console.log(data);
    this.dataService.createCategories(data).subscribe((res: any) => {
      console.log(res);
    });
  }

  edit(data) {
    console.log(data);
  }

  selectTabChange(data) {
    console.log(data);
    if (data.index == 2) {
      this.dataService.getStores().subscribe((res: any) => {
        console.log(res);
      });
    }
    if (data.index == 1) {
      if (this.category.length == 0) {
        this.dataService.getCategories().subscribe((res: any) => {
          this.category = res;
          console.log(this.category);
        });
      }
    }
  }

  createBrand(data) {
    console.log(data);
    this.dataService.createBrands(data).subscribe((res: any) => {
      console.log(data);
    });
  }

  doSomething(data) {
    this.selectedImage = 'https://appimageselinfinito.s3.us-east-2.amazonaws.com/' + data.value;
    console.log(data);
    console.log(this.selectedImage);
  }

  createStore(data) {
    this.dataService.createStore(data).subscribe(res => {
      console.log(res);
    });
  }
}
