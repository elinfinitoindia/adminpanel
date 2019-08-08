import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
@Component({
  selector: 'app-createproducts',
  templateUrl: './createproducts.component.html',
  styleUrls: ['./createproducts.component.scss']
})
export class CreateproductsComponent implements OnInit {

  product
  constructor() { }

  ngOnInit() {
    this.product = new Products();
  }

}
