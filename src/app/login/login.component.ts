import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  login;
  constructor(
    private router: Router,
    private sharedService: SharedService,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  onLogin(data) {
    this.dataService.loginUser(data).subscribe((res: any) => {
      if (res.hasOwnProperty("HasError")) {
        if (res.HasError == true) {
          this.sharedService.createToast(res.errorMessage);
        }
      } else {
        console.log(res);
        
        localStorage.setItem("User", JSON.stringify(res));
        localStorage.setItem("LoggedIn", "true");
        localStorage.setItem("Token", JSON.stringify(res.Token));
        this.router.navigate(["/dashboard"]);
      }
    });

    //  localStorage.setItem('User', "213213213212");
    //    localStorage.setItem('LoggedIn', 'true');
    //   this.router.navigate(['/dashboard']);
  }
}
