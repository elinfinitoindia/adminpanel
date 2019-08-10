import { Component, OnInit } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router, RouterEvent, Event } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  loading: boolean = false;
  constructor(private routes: Router) {}

  ngOnInit() {
    this.routes.events.subscribe((routerEvent:Event)=>{
      this.checkEventRoute(routerEvent);
    })
  }

  checkEventRoute(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
      console.log('navigationstart');
    }
    if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
      this.loading = false;
      console.log('naviation ends');
    }
  }
}
