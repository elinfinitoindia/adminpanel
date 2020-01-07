import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatFormFieldAppearance
} from "@angular/material";
import { DataService } from "src/app/shared/services/data.service";
import { NgForm } from "@angular/forms";
import { Category } from "src/app/models/category";
import {
  trigger,
  transition,
  style,
  stagger,
  animate,
  keyframes,
  query
} from "@angular/animations";
import { map } from "rxjs/operators";


@Component({
  selector: "app-screen1",
  templateUrl: "./screen1.component.html",
  styleUrls: ["./screen1.component.scss"],
  animations: [
    trigger("myInsertRemoveTrigger", [
      transition(
        ":enter",
        query(":self", [
          style({ opacity: 1, width: "0px" }),
          stagger(50, [
            animate(
              "5s",
              keyframes([
                style({
                  transform:
                    "translateZ(-1400px) translateX(-1000px);opacity: 0"
                }),
                style({
                  transform: "translateZ(0) translateX(0);opacity: 1"
                })
              ])
            )
          ])
        ])
      )
    ])
  ]
})
export class Screen1Component implements OnInit {
  brand = true;
  item;
  appearance: MatFormFieldAppearance = "outline";
  selected = "1";
  storeUrl: any = [];
  category: any;
  isSubCategory = false;
  subcats: any[];
  categoryList: any = [];
  storeList: any = [];
  store;
  images: any = [];
  isSubStore = false;
  parentStore;
  storeLogoName;
  CatType;
  LogoName;
  hasimage;
  Url;
  isStore = true;
  type;
  categories;
  previewImage;
  additemUrl: boolean = false;
  brands;

  @ViewChild("categoryForm") categoryForm: NgForm;
  constructor(
    public dialogRef: MatDialogRef<Screen1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService
  ) {
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed" + result);
      // this.categoryForm.reset();
    });
  }

  ngOnInit() {
    if (this.data.type == "estore") {
      this.item = this.data.name;
      this.type = this.data.type;
      console.log(this.item);
      this.dataService.getMajorCategories().subscribe((res: any) => {
        this.categories = res;
        console.log(this.categories);
      });
      this.dataService.listFilesForStores().then(response => {
        this.images = response.Contents.map(data => {
          const row: any = {};
          row.url = this.dataService.getUrl(data.Key);
          row.key = data.Key.split("/").pop();
          row.year = data.LastModified.getUTCFullYear();
          return row;
        });
      });
      if (this.item.StoreType === 2 || 3 || 4) {
        this.hasimage = true;
        this.dataService.getMajorCategories().subscribe((res: any) => {
          this.storeList = res;
        });
        this.dataService.getStoreLogoName().subscribe((res: any) => {
          this.storeLogoName = res;
        });
        if (this.item.CategoryID == null) {
          this.isStore = false;
        }

        this.previewImage = this.item.Logo;
      }
    }
    if (this.data.type == "ecategory") {
      this.item = this.data.name;
      this.isSubCategory = false;
      this.type = this.data.type;
      console.log(this.item);
      this.dataService.getMajorCategories().subscribe((res: any) => {
        this.categories = res;
        console.log(this.categories);
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
      if (this.item.CatType === 0) {
        // console.log(this.data.CatType);
        //  this.hasimage = true;
        this.isSubCategory = true;
        this.isStore = false;
        this.dataService.getMajorCategories().subscribe((res: any) => {
          this.subcats = res;
        });
      }
      if (this.item.CatType === 3) {
        // console.log(this.data.CatType);
        this.hasimage = true;
        this.isSubCategory = false;
        this.isStore = false;
        this.dataService.getDealCategories().subscribe((res: any) => {
          this.subcats = res;
        });
        //  this.dataService.getMajorCategories().subscribe((res: any) => {
        //    this.storeList = res;
        //  });
        //  this.dataService.getStoreLogoName().subscribe((res: any) => {
        //    this.storeLogoName = res;
        //  });
      }
      if (this.item.CatType === 6) {
        // console.log(this.data.CatType);
        this.hasimage = false;
        this.isSubCategory = true;
        this.isStore = false;
        this.dataService.getDealCategories().subscribe((res: any) => {
          this.subcats = res;
          console.log(this.subcats);
        });
        this.dataService.getMajorCategories().subscribe((res: any) => {
          this.storeList = res;
        });
        this.dataService.getStoreLogoName().subscribe((res: any) => {
          this.storeLogoName = res;
        });
      }
      if (this.data.CatType === 15) {
        this.isSubCategory = true;
        this.isStore = false;
        this.dataService.getDealCategories().subscribe((res: any) => {
          this.subcats = res;
        });
        // this.dataService.getMajorCategories().subscribe((res: any) => {
        //   this.storeList = res;
        // });
        this.dataService.getStoreLogoName().subscribe((res: any) => {
          this.storeLogoName = res;
        });
      }
      if (this.data.CatType === 19) {
        this.isSubCategory = true;
        this.dataService.getProductCategories().subscribe((res: any) => {
          this.subcats = res;
        });
      }
      this.previewImage = this.item.Logo;
    } else {
      this.item = this.data.name;

      console.log(this.item);
      if (this.item === "Brand") {
        this.dataService.listFiles().then(response => {
          this.images = response.Contents.map(data => {
            const row: any = {};
            row.url = this.dataService.getUrl(data.Key);
            row.key = data.Key.split("/").pop();
            row.year = data.LastModified.getUTCFullYear();
            return row;
          });
        });
      } else if (this.item === "Category") {
        this.dataService.listFiles().then(response => {
          this.images = response.Contents.map(data => {
            const row: any = {};
            row.url = this.dataService.getUrl(data.Key);
            row.key = data.Key.split("/").pop();
            row.year = data.LastModified.getUTCFullYear();
            return row;
          });
        });
        console.log(this.images);
      } else if (this.item === "Store") {
        this.dataService.getMajorCategories().subscribe((res: any) => {
          this.categoryList = res;
          console.log(this.categoryList);
        });
        this.dataService.listFilesForStores().then(response => {
          this.images = response.Contents.map(data => {
            const row: any = {};
            row.url = this.dataService.getUrl(data.Key);
            row.key = data.Key.split("/").pop();
            row.year = data.LastModified.getUTCFullYear();
            return row;
          });
          console.log(response);
          
        });
        
      }
    }
  }

  addUrl(Name, Url) {
    const element = {
      Name: Name,
      Url: Url
    };
    console.log(element);
    this.storeUrl.push(element);
  }

  addLink() {
    this.additemUrl = true;
  }
  removeLink(data) {
    console.log(data);

    this.data.Url.findIndex(x => x.ID === data.ID);
  }
  removeUrl(data) {
    const item = this.storeUrl.findIndex(x => x.Name === data);
    if (item >= 0) {
      this.storeUrl.splice(item, 1);
    }
  }
  createCategory(data) {
    if (data.CatType === 6) {
      data.Logo = "";
    } else {
      data.Logo =
        "https://dealslocker.s3.ap-south-1.amazonaws.com/" + data.Logo;
    }

    this.dataService.createCategories(data).subscribe((res: any) => {
      console.log(res);
      // this.categoryForm.reset();
      // this.dialogRef.close(res);
    });
  }
  changedSelection(data) {
    console.log("changed event " + data);
    if (data == 100 || data == 13 || data == 11 || data == 6) {
      this.isSubStore = false;
      this.hasimage = true;
    }
    if (data === 3) {
      this.isSubStore = true;
       this.hasimage = true;
      this.dataService.getFeatureSubCategory().subscribe((res: any) => {
        console.log(res);
        this.parentStore = res;
      });
    } else if (data === 1) {
      this.isStore = true;
      this.hasimage = true;
    } else {
      this.isSubStore = false;
    }
    if (data === 2) {
      this.hasimage = true;
      this.isStore = true;
      this.dataService
        .getSubCategory()
        .pipe(map((res: any) => res.filter((resp: any) => resp.CatType == 1)))
        .subscribe((res: any) => {
          this.storeList = res;
          console.log("StoreList" + res);
        });
      this.dataService.getStoreLogoName().subscribe((res: any) => {
        this.storeLogoName = res;
      });
    }
    if (data === 6) {
      this.isSubCategory = true;
      this.isStore = false;
      this.dataService.getDealCategories().subscribe((res: any) => {
        this.subcats = res;
      });
      this.dataService.getMajorCategories().subscribe((res: any) => {
        this.storeList = res;
      });
      this.dataService.getStoreLogoName().subscribe((res: any) => {
        this.storeLogoName = res;
      });
    }
    if (data === 15) {
      this.isSubCategory = true;
      this.isStore = false;
      this.dataService.getMajorCategories().subscribe((res: any) => {
        this.subcats = res;
      });
      // this.dataService.getMajorCategories().subscribe((res: any) => {
      //   this.storeList = res;
      // });
      this.dataService.getStoreLogoName().subscribe((res: any) => {
        this.storeLogoName = res;
      });
    }
    if (data === 19) {
      this.isSubCategory = true;
      this.dataService.getProductCategories().subscribe((res: any) => {
        this.subcats = res;
      });
    }
  }

  changeParentCategory(data) {
    this.dataService.getCategories(data).subscribe((res: any) => {
      this.storeList = res;
    });
    this.dataService.getStoreLogoName().subscribe((res: any) => {
      this.storeLogoName = res;
    });
  }

  createStore(data) {
    data.Url = this.storeUrl;
    if (data.StoreType === 1) {
      data.Url[0].Name =
        "https://dealslocker.s3.ap-south-1.amazonaws.com/Stores/" + data.Logo;
      data.Logo =
        "https://dealslocker.s3.ap-south-1.amazonaws.com/Stores/" + data.Logo;
    } else {
      data.Logo =
        "https://dealslocker.s3.ap-south-1.amazonaws.com/Stores/" + data.Logo;
    }
    this.dataService.createStore(data).subscribe((res: any) => {
      console.log(res);
    });
  }

  editStore(data) {
    console.log(data);
      data.Url = this.storeUrl;
      if (data.StoreType === 1 || data.StoreType == 2) {
        data.Url[0].Name =
          "https://dealslocker.s3.ap-south-1.amazonaws.com/Stores/" + data.Logo;
        data.Logo =
          "https://dealslocker.s3.ap-south-1.amazonaws.com/Stores" + data.Logo;
      } else {
        data.Logo =
          "https://dealslocker.s3.ap-south-1.amazonaws.com/Stores" + data.Logo;
      }

    this.dataService.updateStore(this.item.ID, data).subscribe((res: any) => {
      console.log(res);
    });
    console.log(data);
  }
  doSomething($event) {
    this.previewImage =
      "https://dealslocker.s3.ap-south-1.amazonaws.com/" + $event.value;
    console.log(this.previewImage);
  }
  editUrl(Name, Url) {
    const element = {
      Name: Name,
      Url: Url
    };
    console.log(element);
    console.log(this.item.Url);
    if (typeof Name !== undefined) this.item.Url.push(element);

    console.log(this.item.Url);
    this.additemUrl = false;
  }
  preview(data) {
    console.log(data);
  }
  createBrand(data) {}
  changedBrandSelection(data){}
}
