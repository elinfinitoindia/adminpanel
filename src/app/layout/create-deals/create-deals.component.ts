import { Component, OnInit } from '@angular/core';
import { Deals } from 'src/app/models/deals';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-create-deals',
  templateUrl: './create-deals.component.html',
  styleUrls: ['./create-deals.component.scss']
})
export class CreateDealsComponent implements OnInit {

  deal;
  categories;
  brands;
  stores;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.deal = new Deals();
    // this.dataService.getCategories().subscribe((res:any)=>{
    //   this.categories = res;
    //   console.log(this.categories)
    // })
    
  }

  // getBrands(){
  //   if(this.categories.length < 0){
  //     this.dataService.getCategories().subscribe((res:any)=>{
  //       this.categories = res;
  //     })
  //   }
  // }

  createDeal(data){
    console.log(data);
  }

}
