import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Screen1Component } from '../../screen1/screen1.component';
import { DataService } from 'src/app/shared/services/data.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: "app-createstores",
  templateUrl: "./createstores.component.html",
  styleUrls: ["./createstores.component.scss"]
})
export class CreatestoresComponent implements OnInit {
  stores;
  selectedList;
  brands: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ["select", "id", "Name", "StoreType", "action"];
  dataSource: MatTableDataSource<any>;

  resultsLength = 0;
  isLoadingResults = false;
  selection = new SelectionModel<any>(true, []);
  constructor(
    private dialog: MatDialog,
    private dataService: DataService,
    private sharedService: SharedService,
    private _snackBar: MatSnackBar
  ) {}
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.paginator.pageSize;
    console.log(numSelected);
    console.log(this.selection);
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.selectAllRow();
  }

  selectAllRow() {
    // this.dataSource.data.forEach(row => {
    //   this.selection.select(row);
    //   console.log(row);
    // });
    let pagination = this.dataSource.paginator;
    for (
      let index =
        pagination.pageIndex + (pagination.pageSize - 1) * pagination.pageIndex;
      index <
      this.dataSource.paginator.pageSize +
        pagination.pageIndex +
        (pagination.pageSize - 1) * pagination.pageIndex;
      index++
    ) {
      console.log(index);
      console.log(this.dataSource.data[index]);
      this.selection.select(this.dataSource.data[index]);
    }
    console.log(this.dataSource.paginator);
  }

  /** The label for the checkbox on the passed row */

  isSelected(row) {
    if (!this.selection.isSelected(row)) {
      console.log(row);
    } else {
      console.log("unselected");
    }

    this.selection.toggle(row);
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getStores().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
      console.log(this.dataSource);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  createStoreDialog() {
    let dialogRef = this.dialog.open(Screen1Component, {
      data: { name: "Store" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  deleteCategory() {
    // this.selectedList.forEach(element => {
    //   this.dataService.deleteCategory(element.value.ID).subscribe((res:any)=>{
    //     console.log("Element deleted " + element.value.Name);
    //   })

    // });
    for (let index = 0; index < this.selectedList.length; ) {
      this.dataService
        .deleteStores(this.selectedList[index].value.ID)
        .subscribe(
          (res: any) => {
            this.sharedService.createToast(this.selectedList[index].value.name);
            index++;
          },
          err => {
            this.sharedService.createToast(
              "Error in deleting " + this.selectedList[index].value.name
            );
            index++;
          }
        );
    }
  }
  onSelection(data1) {
    this.selectedList = data1;
    console.log(this.selectedList);
  }
  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editOffer(data) {
    let dialogRef = this.dialog.open(Screen1Component, {
      data: { name: data, type: "estore" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  deleteStore(data) {
    // console.log(data);
    if (window.confirm("Discard changes?")) {
      this.dataService.deleteStores(data.ID).subscribe((res: any) => {
        this._snackBar.open("Product Deleted " + res.Name, "", {
          duration: 2000
        });
        this.getData();
      });
      // console.log(data);
    }
  }
}
