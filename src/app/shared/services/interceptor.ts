import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _throw as throwError } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { DataService } from './data.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor( private sharedService: SharedService , private dataService: DataService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // request = request.clone({
    //   headers: headers
    // });
    const token: any = JSON.parse(localStorage.getItem("Token"));

    if (token) {
    console.log(token.Value);
    
 request = request.clone({
   setHeaders: {
     Authorization: "Bearer " + token.Value,
     "Access-Control-Allow-Origin": "*",
     "Content-Type": "application/json"
   }
 });      
      
      

      // request = request.clone({
      //   headers: request.headers.set('Access-Control-Allow-Origin', '*'),

      // });
    }

    // if (!request.headers.has("Content-Type")) {
    //   request = request.clone({
    //     headers: request.headers.set("Content-Type", "application/json")
    //   });
    // }

    // request = request.clone({
    //   headers: request.headers.set("Accept", "application/json")
    // });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // alert(data);
        console.log(JSON.stringify(error));
        this.sharedService.handleError(error);
        return throwError(error);
      })
    );
  }
}
