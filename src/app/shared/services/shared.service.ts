import { Injectable } from '@angular/core';
import { RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private router:RouterEvent
  ) { }

  
}
