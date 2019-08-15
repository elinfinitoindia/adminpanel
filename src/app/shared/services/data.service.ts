import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deals } from 'src/app/models/deals';
import { Ads } from 'src/app/models/ads';
import { Products } from 'src/app/models/products';
import { apiUrl } from '../../../environments/environment';

const headers = new HttpHeaders({
  'Access-Control-Allow-Origin': 'application/json'
});
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}




    /********* Get Services **************/
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
    return this.http.get(apiUrl+"stores");
  }

  // get Categories
  getCategories() {
    return this.http.get(apiUrl+"category");
  }

  getBrands(){
    return this.http.get(apiUrl+"brands");
  }

  getImages() {}
  

  /****************End Of get Services ************/

  /********* Create Services **************/

  createProducts() {

  }
  createDeals(data) {
    return this.http.post(apiUrl+"deals",data,{headers});
  }
  createAds(data) {
    return this.http.post(apiUrl+"ads",data,{headers});
  }

  createCategories(data) {
    return this.http.post(apiUrl + 'category', data, { headers });
  }

  createBrands(data) {
    return this.http.post(apiUrl + 'brands', data, { headers });
  }

  createStore(data) {
    return this.http.post(apiUrl + 'stores', data, { headers });
  }

  /****************End Of Create Services ************/

  /***************Edit Services */
    /****************End Of Edit Services ************/
  
}
