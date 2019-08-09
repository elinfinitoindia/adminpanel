import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.scss']
})
export class EditproductsComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) { 
    console.log(this.route.snapshot.params['id']);
  }

  ngOnInit() {
  }

}
