import { Component, OnInit } from '@angular/core';
import { Deals } from 'src/app/models/deals';

@Component({
  selector: 'app-create-deals',
  templateUrl: './create-deals.component.html',
  styleUrls: ['./create-deals.component.scss']
})
export class CreateDealsComponent implements OnInit {

  deal;
  constructor() { }

  ngOnInit() {
    this.deal = new Deals();
  }

}
