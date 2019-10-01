import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterOutlet, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(private translate: TranslateService, private router: Router) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === 'dashboard') this.outlet.deactivate();
    });
  }
}
