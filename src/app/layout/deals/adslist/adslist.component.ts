import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { PeriodicElement } from '../../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adslist',
  templateUrl: './adslist.component.html',
  styleUrls: ['./adslist.component.scss']
})
export class AdslistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['select', 'id', 'employee_name', 'employee_salary', 'employee_age', 'action'];
  dataSource: MatTableDataSource<any>;

  resultsLength = 0;
  isLoadingResults = false;
  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
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
      let index = pagination.pageIndex + (pagination.pageSize - 1) * pagination.pageIndex;
      index < this.dataSource.paginator.pageSize + pagination.pageIndex + (pagination.pageSize - 1) * pagination.pageIndex;
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
      console.log('unselected');
    }

    this.selection.toggle(row);
  }

  constructor(private router: Router, private http: HttpClient) {
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editOffer(data) {
    console.log(data);
    this.router.navigate(['/edit/', data.id]);
  }
}
