import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Screen1Component } from '../../screen1/screen1.component';

@Component({
  selector: 'app-createstores',
  templateUrl: './createstores.component.html',
  styleUrls: ['./createstores.component.scss']
})
export class CreatestoresComponent implements OnInit {
  stores;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.stores = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  }

  createStoreDialog() {
    let dialogRef = this.dialog.open(Screen1Component, { data: { name: 'Store' } });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
