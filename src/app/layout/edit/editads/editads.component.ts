import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Ads } from 'src/app/models/ads';

@Component({
  selector: 'app-editads',
  templateUrl: './editads.component.html',
  styleUrls: ['./editads.component.scss']
})
export class EditadsComponent implements OnInit {

  @ViewChild('adsForm') adsForm : NgForm
  ads;
  constructor(
    private route:ActivatedRoute , 
  ) { 
    this.ads = new Ads();
    console.log(this.route.snapshot.params['id']);
  }

  ngOnInit() {
  }

  canDeactivate(){
    if(this.adsForm.dirty == true && this.adsForm.submitted == false){
      return window.confirm('Discard changes?');
    }
    return true;

  }


  editAds(data){
    console.log(data);
  }

}
