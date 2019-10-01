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
  @ViewChild('adsForm') adsForm: NgForm;
  constructor(private dataService: DataService, private location: Location) {}

  ngOnInit() {
    this.ads = new Ads();
  }

  createAds(data) {
    console.log(data);
  }

  getCategories() {
    this.dataService.getCategories().subscribe((res: any) => {
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

  goBack(): void {}
}
