import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.scss']
})
export class EditproductsComponent implements OnInit {

  @ViewChild('productForm') productForm : NgForm;
  constructor(
    private route:ActivatedRoute,

  ) { 
    console.log(this.route.snapshot.params['id']);
  }

  ngOnInit() {
  }
  canDeactivate() {
    console.log('i am navigating away');
    if (this.productForm.dirty == true && this.productForm.submitted == false) {
        return window.confirm('Discard changes?');
    }
    console.log('you are going away, goodby');
    return true;
}

}
