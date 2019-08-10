import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: boolean = false;

  constructor(private translate: TranslateService, private routes: Router) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.routes.events.subscribe((routerEvent: Event) => {
      this.checkEventRoute(routerEvent);
    });
  }

  checkEventRoute(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }
}
