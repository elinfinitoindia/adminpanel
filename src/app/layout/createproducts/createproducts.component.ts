import { Component, OnInit, ViewChild } from '@angular/core';
import { Products } from '../../models/products';
import { DataService } from 'src/app/shared/services/data.service';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
@Component({
  selector: "app-createproducts",
  templateUrl: "./createproducts.component.html",
  styleUrls: ["./createproducts.component.scss"]
})
export class CreateproductsComponent implements OnInit {
  product;

  categories;
  images;
  subcategory;
  @ViewChild("productForm") productForm: NgForm;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getProductCategories().subscribe((res: any) => {
      this.categories = res;
    });
    this.dataService.getAllCategories()
    .pipe(map((res:any)=> res.filter((resp:any)=> resp.CatType == 19)))
    .subscribe((res:any)=>{
      this.subcategory = res;
       
    });
    this.dataService.listFiles().then(response => {
      this.images = response.Contents.map(data => {
        const row: any = {};
        row.url = this.dataService.getUrl(data.Key);
        row.key = data.Key.split("/").pop();
        row.year = data.LastModified.getUTCFullYear();
        return row;
      });
    });
  }

  createProduct(data) {
    console.log(data);
    data.Image = "https://dealslocker.s3.ap-south-1.amazonaws.com/" + data.Image;
    this.dataService.createProducts(data).subscribe((res: any) => {
      console.log(res);
    });
  }

  getCategories() {
    this.dataService.getProductCategories().subscribe((res: any) => {
      this.categories = res;
    });
  }

  canDeactivate() {
    if (this.productForm.dirty == true) {
      return window.confirm("Discard Changes!!");
    }
    return true;
  }

  doSomething(data) {
    console.log(data);
  }

  preview(data){
    console.log(data);
  }
}
