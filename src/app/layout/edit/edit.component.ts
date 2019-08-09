import { Component, OnInit } from '@angular/core';
import { Deals } from 'src/app/models/deals';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  deal;
  brand:boolean = true;
  constructor() { }

  ngOnInit() {
    this.deal = new Deals();
  }

}
