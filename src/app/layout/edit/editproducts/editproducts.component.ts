import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-editproducts",
  templateUrl: "./editproducts.component.html",
  styleUrls: ["./editproducts.component.scss"]
})
export class EditproductsComponent implements OnInit {
  @ViewChild("productForm") productForm: NgForm;
  product;
  categories;
  subcategory;
  images;
  isloaded:boolean = false;
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    console.log(this.route.snapshot.params["id"]);
  }

  ngOnInit() {
    this.dataService
      .getProductById(this.route.snapshot.params["id"])
      .subscribe((res: any) => {
        console.log(res);
        this.product = res;
        this.isloaded = true;
      });
    this.dataService.getProductCategories().subscribe((res: any) => {
      this.categories = res;
    });
    this.dataService
      .getAllCategories()
      .pipe(map((res: any) => res.filter((resp: any) => resp.CatType == 19)))
      .subscribe((res: any) => {
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
  canDeactivate() {
    console.log("i am navigating away");
    if (this.productForm.dirty == true && this.productForm.submitted == false) {
      return window.confirm("Discard changes?");
    }
    console.log("you are going away, goodby");
    return true;
  }

  editProduct(data) {
     data.Logo =
       "https://dealslocker.s3.ap-south-1.amazonaws.com/" + data.Logo;
    this.dataService.updateProduct(this.product.ID, data).subscribe((res:any)=>{
      console.log(res);
      
    })
  }
  doSomething(data) {}
  preview(data) {}
}
