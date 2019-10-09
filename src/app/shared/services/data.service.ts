import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deals } from 'src/app/models/deals';
import { Ads } from 'src/app/models/ads';
import { Products } from 'src/app/models/products';
import * as AWS from 'aws-sdk';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Access-Control-Allow-Origin': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class DataService {
  s3;
  private signedUrlExpireSeconds = 60 * 5;
  constructor(private http: HttpClient) {
    AWS.config.region = environment.configRegion; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: environment.IdentityPoolId // Identity pool ID'
    });
    this.s3 = new AWS.S3();
  }

  /********* Get Services **************/
  // get deals
  getDeals(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'deals/' + id);
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
    return this.http.get(environment.apiUrl + 'stores');
  }

  // get Categories
  getCategories() {
    return this.http.get(environment.apiUrl + 'category').pipe(map((res: any) => res.filter((resp: any) => resp.CatType == 2)));
  }

  getMajorCategories() {
    return this.http.get(environment.apiUrl + 'category').pipe(map((res: any) => res.filter((resp: any) => resp.CatType == 1)));
  }

  getBrands() {
    return this.http.get(environment.apiUrl + 'brand');
  }

  getImages() {
    var d = [];
  }

  getSubCategory() {
    return this.http.get(environment.apiUrl + 'category').pipe(map((res: any) => res.filter((resp: any) => resp.CatType == 1)));
  }

  /****************End Of get Services ************/

  /********* Create Services **************/

  createProducts() {}
  createDeals(data) {
    return this.http.post(environment.apiUrl + 'deals', data, { headers });
  }
  createAds(data) {
    return this.http.post(environment.apiUrl + 'ads', data, { headers });
  }

  createCategories(data) {
    return this.http.post(environment.apiUrl + 'category', data, { headers });
  }

  createBrands(data) {
    return this.http.post(environment.apiUrl + 'brand', data, { headers });
  }

  createStore(data) {
    return this.http.post(environment.apiUrl + 'stores', data, { headers });
  }

  /****************End Of Create Services ************/

  /***************Edit Services */
  /****************End Of Edit Services ************/

  listFiles() {
    return this.s3
      .listObjectsV2({
        Bucket: environment.Bucket
      })
      .promise();
  }

  getUrl(key: string) {
    return this.s3.getSignedUrl('getObject', {
      Bucket: environment.Bucket,
      Key: key,
      Expires: this.signedUrlExpireSeconds
    });
  }
}
