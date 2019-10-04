import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';
import { Http } from 'aws-sdk/clients/xray';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditdealService implements Resolve<any> {
  constructor(private dataService: DataService, private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = route.paramMap.get('id');
    return this.http.get('http://localhost:52044/api/deals/' + id).pipe(
      map(
        deals => ({
          deals: deals
        }),
        catchError(error => {
          const message = 'No Product Found with this ';
          console.log(message);
          return of({ deals: null, error: message });
        })
      )
    );
  }
}
