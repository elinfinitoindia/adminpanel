import { Component, OnInit } from '@angular/core';
import { Ads } from 'src/app/models/ads';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-createads',
  templateUrl: './createads.component.html',
  styleUrls: ['./createads.component.scss']
})
export class CreateadsComponent implements OnInit {

  ads;
  categories;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.ads = new Ads();
  }


  createAds(data){
    console.log(data);
  }


  getCategories(){
this.dataService.getCategories().subscribe((res:any)=>{
  this.categories = res;
})
  }

}
