import { Component, OnInit, ViewChild } from '@angular/core';
import { Deals } from 'src/app/models/deals';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  deal;
  brand: boolean = true;
  dealForm;
  error: any;
  brands;
  categories;
  stores;
  images;
  subcategories;
  storeselected;
  categoryselected;
  subcategoryselected;
  selectedImage;
  @ViewChild("dealForm") dealform: NgForm;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private dataService: DataService
  ) {
    // this.deal = new Deals();
    // this.deal = this.router.snapshot.data['resolvedData'].deals;
  }

  ngOnInit() {
    this.router.data.subscribe(data => {
      this.deal = data["resolvedData"].deals;
      // this.error = data['resolvedData'].error;
      console.log(this.deal);
      this.selectedImage = this.deal.Logo;
    });

    console.log(this.error);
    console.log(this.deal);
    this.dataService.listFiles().then(response => {
      this.images = response.Contents.map(data => {
        const row: any = {};
        row.url = this.dataService.getUrl(data.Key);
        row.key = data.Key.split("/").pop();
        row.year = data.LastModified.getUTCFullYear();
        return row;
      });
    });
    this.dataService.getDealCategories().subscribe((res: any) => {
      this.categories = res;
      this.categoryselected = this.deal.CategoryID;
      console.log(this.categoryselected);
      this.dataService
        .getCategories(this.deal.CategoryID)
        .subscribe((res: any) => {
          this.subcategories = res;
          this.subcategoryselected = this.deal.SubCategoryID;
        });
    });
    this.dataService.getShoppingStores().subscribe((res: any) => {
      this.stores = res;
    });
  }

  canDeactivate() {
    console.log("i am navigating away");
    if (this.dealform.dirty == true && this.dealform.submitted == false) {
      return window.confirm("Discard changes?");
    }
    console.log("you are going away, goodby");
    return true;
  }

  editDeal(data) {
    console.log(data);
    this.dataService.updateDeals(this.deal.ID, data).subscribe((res:any)=>{
      console.log(res);
    this.route.navigate(["/deals"]);  
    }, err=>{
      window.alert("Not update");
    })
  }

  doSomething($event) {
    this.selectedImage =
      "https://dealslocker.s3.ap-south-1.amazonaws.com/" + $event.value;
  }
  preview(data){
    
  }
}
