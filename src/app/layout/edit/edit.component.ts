import { Component, OnInit, ViewChild } from '@angular/core';
import { Deals } from 'src/app/models/deals';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  deal;
  brand:boolean = true;
  dealForm;
  @ViewChild('dealForm') dealform : NgForm
  constructor(
    private route:Router
  ) { }

  ngOnInit() {
    this.deal = new Deals();
  }

  canDeactivate() {
    console.log('i am navigating away');
    if (this.dealform.dirty == true && this.dealform.submitted == false) {
        return window.confirm('Discard changes?');
    }
    console.log('you are going away, goodby');
    return true;
}


editDeal(data){
  console.log(data);
  this.route.navigate(['/deals'])
}

}
