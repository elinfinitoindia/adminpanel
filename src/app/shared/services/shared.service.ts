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
}
