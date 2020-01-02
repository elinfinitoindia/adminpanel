import { Component, OnInit, ViewChild } from '@angular/core';
import { Ads } from 'src/app/models/ads';
import { DataService } from 'src/app/shared/services/data.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-createads',
  templateUrl: './createads.component.html',
  styleUrls: ['./createads.component.scss']
})
export class CreateadsComponent implements OnInit {
  ads;
  categories;
  images;
  selectedImage;
  @ViewChild('adsForm') adsForm: NgForm;
  constructor(private dataService: DataService, private location: Location) {}

  ngOnInit() {
    this.ads = new Ads();
    this.dataService.listFiles().then(response => {
      this.images = response.Contents.map(data => {
        const row: any = {};
        row.url = this.dataService.getUrl(data.Key);
        row.key = data.Key.split('/').pop();
        row.year = data.LastModified.getUTCFullYear();
        return row;
      });
    });
  }

  createAds(data) {
    data.Logo = 'https://appimageselinfinito.s3.us-east-2.amazonaws.com/' + data.Logo;
    this.dataService.createAds(data).subscribe((res:any)=>{
      console.log(res);
      
    })
  }

  getCategories() {
    this.dataService.getAdsCategory().subscribe((res: any) => {
      this.categories = res;
    });
  }

  canDeactivate() {
    console.log('i am navigating away');
    if (this.adsForm.dirty == true && this.adsForm.submitted == false) {
      return window.confirm('Discard changes?');
    }
    console.log('you are going away, goodby');
    return true;
  }
  
  doSomething(data) {
    this.selectedImage =
      "https://dealslocker.s3.ap-south-1.amazonaws.com/" + data.value;
  }

  goBack(): void {}

  clickBtn() {
    this.dataService.createShortDynamicLink();
  }
}
