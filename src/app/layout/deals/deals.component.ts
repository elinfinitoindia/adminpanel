import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, MatPaginator, MatCheckboxChange } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Observable, merge , of as observableOf } from 'rxjs';

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}


@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements AfterViewInit, OnInit{
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['select','created', 'state', 'number', 'title'];
  exampleDatabase;
  data: GithubIssue[] = [];
  selection = new SelectionModel<GithubIssue>(true, []);

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length ;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() :this.changeAllEvent(this.selection)
 
  }
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
   
  }


  

  constructor(private route: ActivatedRoute, private router: Router ,
    private http:HttpClient
    ) {}


    ngOnInit(){
      console.log(this.selection.isSelected)
    }
    
  //   isChecked(row: any): boolean {
  //     const found = this.selection.selected.find(el => el.number === row._id);
  //     if (found) {
  //       return true;
  //     }
  //     return false;
  //  }

  ngAfterViewInit() {
    let id = this.route.snapshot.params['id'];
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.getRepoIssues(
          this.sort.active, this.sort.direction, this.paginator.pageIndex);
      }),
      map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.total_count;

        return data.items;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isRateLimitReached = true;
        return observableOf([]);
      })
    ).subscribe((data:any) => this.data = data);
  
    
  }

  // ngAfterViewInit(): void {
  //   // this.dataSource.sort = this.sort;
  //   // this.dataSource.paginator = this.paginator
  // }

  edit(data) {
    this.router.navigate(['/edit/', data.position]);
  }
  
  toggle(row){
    console.log(row)
  }


changeEvent($event , row){
  this.selection.toggle(row)
  if($event.checked){
     console.log(row);
    }
  
}

changeAllEvent( selection){
  this.data.forEach(row => this.selection.select(row));
  console.log(this.selection.selected);
}



getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
  const href = 'https://api.github.com/search/issues';
  const requestUrl =
      `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

  return this.http.get<GithubApi>(requestUrl);
}


}
