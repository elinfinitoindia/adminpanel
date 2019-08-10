import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deals } from 'src/app/models/deals';
import { Ads } from 'src/app/models/ads';
import { Products } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  // get deals
  getDeals(): Observable<Deals> {
    return;
  }

  // get ads
  getAds(): Observable<Ads> {
    return;
  }

  // get Products
  getProducts(): Observable<Products> {
    return;
  }

  // Get Stores
  getStores() {
    return;
  }

  // get Categories
  getCategories() {
    return;
  }

  getImages() {}
  editProducts() {}
  editDeals() {}
  editAds() {}
  createStore() {}
  createProducts() {}
  createDeals() {}
  createAds() {}

  
}
