import { Component, OnInit, ViewChild } from '@angular/core';
import { Deals } from 'src/app/models/deals';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  deal;
  brand: boolean = true;
  dealForm;
  error: any;
  @ViewChild('dealForm') dealform: NgForm;
  constructor(private route: Router, private router: ActivatedRoute) {
    this.deal = new Deals();
    // this.deal = this.router.snapshot.data['resolvedData'].deals;
    this.router.data.subscribe(data => {
      const resolvedData = data['resolvedData'].deals;
      // this.error = data['resolvedData'].error;
    });

    console.log(this.error);
    console.log(this.deal);
  }

  ngOnInit() {}

  canDeactivate() {
    console.log('i am navigating away');
    if (this.dealform.dirty == true && this.dealform.submitted == false) {
      return window.confirm('Discard changes?');
    }
    console.log('you are going away, goodby');
    return true;
  }

  editDeal(data) {
    console.log(data);
    this.route.navigate(['/deals']);
  }
}
