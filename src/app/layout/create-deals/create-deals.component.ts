import { Component, OnInit, ViewChild } from '@angular/core';
import { Deals } from 'src/app/models/deals';
import { DataService } from 'src/app/shared/services/data.service';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  categories: any = [];
  subcategory: any = [];
  brands: any = [];
  stores: any = [];
  s3;
  images;
  selectedImage;

  @ViewChild('dealForm') dealForm: NgForm;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    // this.deal = new Deals();
    // this.dataService
    //   .getCategories()
    //   .pipe(map((res: any) => res.filter(resp => resp.CatType != '4')))
    //   .subscribe((res: any) => {
    //     this.categories = res;
    //     this.categories.forEach(element => {
    //       if (element.CatType == 2) {
    //         console.log(element);
    //         this.subcategory.push(element);
    //       }
    //     });
    //     console.log(this.categories);
    //   });
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
    // this.dataService
    //   .listFiles()
    //   .then(response => {
    //     this.images = response.Contents.map(data => {
    //       const row: any = {};
    //       row.url = this.dataService.getUrl(data.Key);
    //       row.key = data.Key.split('/').pop();
    //       row.year = data.LastModified.getUTCFullYear();
    //       return row;
    //     });
    //   })
    //   .catch(error => {});
    // console.log(this.images);
    this.dataService.listFiles().then(response => {
      this.images = response.Contents.map(data => {
        const row: any = {};
        row.url = this.dataService.getUrl(data.Key);
        row.key = data.Key.split('/').pop();
        row.year = data.LastModified.getUTCFullYear();
        return row;
      });
    });
    this.dataService.getDealCategories().subscribe((res: any) => {
      this.categories = res;
    });

    this.dataService.getStores().subscribe((res: any) => {
      this.stores = res;
    });
  }

  getBrands() {
    if (this.brands.length <= 0) {
      this.dataService.getBrands().subscribe((res: any) => {
        this.brands = res;
      });
    }
  }

  getStores() {}

  getCategory(data) {}

  createDeal(data) {
    data.Logo = 'https://appimageselinfinito.s3.us-east-2.amazonaws.com/' + data.Logo;
    this.dataService.createDeals(data).subscribe((res: any) => {
      console.log(res);
    });
  }

  doSomething(data) {
    this.selectedImage = 'https://appimageselinfinito.s3.us-east-2.amazonaws.com/' + data.value;
  }

  canDeactivate() {
    if (this.dealForm.dirty == true) return window.confirm('Discard changes?');
    return true;
  }

  goBack() {
    this.router.navigate(['dashboard']);
  }
}
