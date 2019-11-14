import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public sharedService: SharedService) {}

  canActivate() {
    if (localStorage.getItem("User") && localStorage.getItem("LoggedIn")) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
