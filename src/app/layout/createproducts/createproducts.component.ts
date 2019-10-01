import { Component, OnInit, ViewChild } from '@angular/core';
import { Products } from '../../models/products';
import { DataService } from 'src/app/shared/services/data.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-createproducts',
  templateUrl: './createproducts.component.html',
  styleUrls: ['./createproducts.component.scss']
})
export class CreateproductsComponent implements OnInit {
  product;
  categories;
  @ViewChild('productForm') productForm: NgForm;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.product = new Products();
  }

  createProduct(data) {
    console.log(data);
  }

  getCategories() {
    this.dataService.getCategories().subscribe((res: any) => {
      this.categories = res;
    });
  }

  canDeactivate() {
    if (this.productForm.dirty == true) {
      return window.confirm('Discard Changes!!');
    }
    return true;
  }
}
