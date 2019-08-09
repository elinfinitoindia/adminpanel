import { Component, OnInit } from '@angular/core';
import { Ads } from 'src/app/models/ads';

@Component({
  selector: 'app-createads',
  templateUrl: './createads.component.html',
  styleUrls: ['./createads.component.scss']
})
export class CreateadsComponent implements OnInit {

  ads;
  constructor() { }

  ngOnInit() {
    this.ads = new Ads();
  }


  createAds(data){
    console.log(data);
  }

}
