import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-enterdata',
  templateUrl: './enterdata.component.html',
  styleUrls: ['./enterdata.component.scss']
})
export class EnterdataComponent implements OnInit {

  brand:boolean = true;
  panelOpenState = false;
  image;
  imagePath;
  category:any = {};
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {
  }


  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    // if (mimeType.match(/image\/*/) == null) {
    //   this.message = "Only images are supported.";
    //   return;
    // }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.image = reader.result; 
    }
  }

  createCategory(data){
    this.dataService.createCategories(data).subscribe((res:any)=>{
      console.log(res);
    })
  }


}
