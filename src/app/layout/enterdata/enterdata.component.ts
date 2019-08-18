import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { ThrowStmt } from '@angular/compiler';
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
  scategory:any = [];
  brandForm:NgForm;
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items = [
      {
        Name: 'One'
      },
      {
        Name: 'Two'
      }
    ];

    this.dataService.getCategories().subscribe((res:any)=>{
      let data = res;
      data.forEach(element => {
        if(element.CatType ==1 ){
          this.scategory.push(element);
          console.log(this.scategory);
        }
      });
    })

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
      if(this.category.length == 0){
      this.dataService.getCategories().subscribe((res: any) => {
        this.category =res;
      });
    }
    }
  }

  createBrand(data){
    console.log(data);
    this.brandForm.reset;
  }
}
