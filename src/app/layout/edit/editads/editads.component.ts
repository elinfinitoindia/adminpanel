import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editads',
  templateUrl: './editads.component.html',
  styleUrls: ['./editads.component.scss']
})
export class EditadsComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) { 
    console.log(this.route.snapshot.params['id']);
  }

  ngOnInit() {
  }

}
