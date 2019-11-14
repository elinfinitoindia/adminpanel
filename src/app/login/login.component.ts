import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router , private sharedService: SharedService) {}

  ngOnInit() {}

  onLogin() {

   localStorage.setItem('User', "213213213212");
     localStorage.setItem('LoggedIn', 'true');
    this.router.navigate(['/dashboard']);
  }
}
