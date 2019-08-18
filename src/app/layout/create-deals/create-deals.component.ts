import { Component, OnInit } from '@angular/core';
import { Deals } from 'src/app/models/deals';
import { DataService } from 'src/app/shared/services/data.service';
import * as AWS from 'aws-sdk';

const params = {
  Bucket: 'appimageselinfinito'
};


@Component({
  selector: 'app-create-deals',
  templateUrl: './create-deals.component.html',
  styleUrls: ['./create-deals.component.scss']
})


export class CreateDealsComponent implements OnInit {
  deal;
  categories;
  brands;
  stores;
  s3;
  images;
  selectedImage;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.deal = new Deals();
    this.dataService.getCategories().subscribe((res: any) => {
      this.categories = res;
      console.log(this.categories);
     
    });

    // let images =  this.dataService.getImages().then(res=>{
    //   console.log(res);
    // });
    // AWS.config.region = 'us-east-1'; // Region
    // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    //   IdentityPoolId: 'us-east-1:4328e2dd-c225-4aac-ad69-b2f4c38a26ab'
    // });
    // this.s3 = new AWS.S3();
    // this.s3.listObjectsV2(params, function(err, data) {
    //   if (err) {
    //     return err; // an error occurred
    //   } else {
    //     this.images =  data.Contents
    //   }
    // });

    // console.log(this.images);


    this.dataService.listFiles().then((response) => {
      this.images = response.Contents.map((data)=>{
         const row : any = {};
         row.url = this.dataService.getUrl(data.Key);
         row.key = data.Key.split('/').pop();
         row.year = data.LastModified.getUTCFullYear();
         return row;
      })
      }).catch((error) => {
      }) ;
   
      console.log(this.images);
  }

  getBrands() {
    if (this.categories.length < 0) {
      this.dataService.getCategories().subscribe((res: any) => {
        this.categories = res;
      });
    }
  }

  createDeal(data) {
    console.log(data);
  }


  doSomething(data){
   this.selectedImage = "https://appimageselinfinito.s3.us-east-2.amazonaws.com/"+data.value;
  }
}
