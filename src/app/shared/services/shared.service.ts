import { Injectable } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private router: RouterEvent, private _snackBar: MatSnackBar) {}

  createToast(data: string) {
    this._snackBar.open(data, '', {
      duration: 2000
    });
  }

  setUserLoginStatus() {
    localStorage.setItem('LoggedIn', 'true');
  }

  setToken(token) {
    localStorage.setItem('Token', JSON.stringify(token));
  }

  getToken(){
   return localStorage.getItem("Token");
  }

  setUser(user) {
    localStorage.setItem('User', JSON.stringify(user));
  }

  getUserLoginStatus() {
 return localStorage.getItem('LoggedIn');
  }

 async getUser(){
  console.log("getUser")
  return  await localStorage.getItem("User") || "";
  }

  removeLoginDetail() {
    localStorage.setItem('User', '');
    localStorage.setItem('LoggedIn', '');
  }

  handleError(data){
    this.createToast(data.statusText);
  }
}
