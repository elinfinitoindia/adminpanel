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
  providedIn: "root"
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

  loginUser(data) {
    return this.http.post(environment.apiUrl + "users/Login", data);
  }

  /********* Get Services **************/
  // get deals
  getDeals(id): Observable<any> {
    return this.http.get(environment.apiUrl + "deals/" + id);
  }

  // get ads
  getAds(): Observable<Ads> {
    return;
  }

  getAdsCategory() {
    return this.http
      .get(environment.apiUrl + "category")
      .pipe(map((res: any) => res.filter((resp: any) => resp.CatType === 99)));
  }

  // get Products
  getProducts() {
    return this.http.get(environment.apiUrl + "product");
  }

  getProductById(data) {
    return this.http.get(environment.apiUrl + "product/" + data);
  }

  // Get Stores
  getStores() {
    return this.http.get(environment.apiUrl + "stores");
  }

  getShoppingStores() {
    return this.http
      .get(environment.apiUrl + "stores")
      .pipe(map((res: any) => res.filter((resp: any) => resp.StoreType === 1)));
  }
  getAllCategories() {
    return this.http.get(environment.apiUrl + "category");
  }
  getProductCategories() {
    return this.http
      .get(environment.apiUrl + "category")
      .pipe(map((res: any) => res.filter((resp: any) => resp.CatType === 4)));
  }
  getDealCategories() {
    return this.http
      .get(environment.apiUrl + "category")
      .pipe(map((res: any) => res.filter((resp: any) => resp.CatType === 3)));
  }
  // get Categories
  getCategories(data) {
    return this.http.get(
      environment.apiUrl + "category/getSubCategory/" + data
    );
  }

  getSubCategory() {
    return this.http.get(environment.apiUrl + "category");
  }

  getMajorCategories() {
    return this.http
      .get(environment.apiUrl + "category")
      .pipe(
        map((res: any) =>
          res.filter(
            (resp: any) =>
              resp.CatType === 1 ||
              resp.CatType === 2 ||
              resp.CatType === 3 ||
              resp.CatType === 4 ||
              resp.CatType === 11 ||
              resp.CatType === 0
          )
        )
      );
  }

  getBrands() {
    return this.http.get(environment.apiUrl + "brand");
  }

  getImages() {
    const d = [];
  }

  getFeatureSubCategory() {
    return this.http
      .get(environment.apiUrl + "category")
      .pipe(map((res: any) => res.filter((resp: any) => resp.CatType === 11)));
  }

  /****************End Of get Services ************/

  /********* Create Services **************/

  createProducts(data) {
    return this.http.post(environment.apiUrl + "product", data);
  }
  createDeals(data) {
    return this.http.post(environment.apiUrl + "deals", data, { headers });
  }
  createAds(data) {
    return this.http.post(environment.apiUrl + "ads", data, { headers });
  }

  createCategories(data) {
    return this.http.post(environment.apiUrl + "category", data, { headers });
  }

  createBrands(data) {
    return this.http.post(environment.apiUrl + "brand", data, { headers });
  }

  createStore(data) {
    return this.http.post(environment.apiUrl + "stores", data, { headers });
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

  listFilesForStores() {
    return this.s3
      .listObjectsV2({
        Bucket: environment.Bucket,
        Prefix: "Stores/"
      })
      .promise();
  }

  listFilesForDeals() {
    return this.s3
      .listObjectsV2({
        Bucket: environment.Bucket,
        Prefix: "Deals/"
      })
      .promise();
  }

  listFilesForCategory() {
    return this.s3
      .listObjectsV2({
        Bucket: environment.Bucket,
        Prefix: "Category/"
      })
      .promise();
  }

  listFilesForProduct() {
    return this.s3
      .listObjectsV2({
        Bucket: environment.Bucket,
        Prefix: "Product/"
      })
      .promise();
  }

  getUrl(key: string) {
    return this.s3.getSignedUrl("getObject", {
      Bucket: environment.Bucket,
      Key: key,
      Expires: this.signedUrlExpireSeconds
    });
  }

  createShortDynamicLink() {
    this.http
      .post(
        "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyDVbIsviInWkIsGkS1o2RL6WTDLkT0o3bc",
        {
          longDynamicLink:
            "https://dealslocker.page.link/?link=http://palianews.com/archives/15709&apn=io.dealslocker.app&d=1"
        }
      )
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  getStoreLogoName() {
    return this.http
      .get(environment.apiUrl + "stores")
      .pipe(
        map((res: any) => res.filter((resp: any) => resp.CategoryID == null))
      );
  }

  deleteCategory(data) {
    return this.http.delete(environment.apiUrl + "category/" + data);
  }
  deleteStores(data) {
    return this.http.delete(environment.apiUrl + "stores/" + data);
  }

  deleteProducts(data) {
    return this.http.delete(environment.apiUrl + "product/" + data);
  }

  getAllDeals() {
    return this.http.get(environment.apiUrl + "deals");
  }

  updateProduct(id, body) {
    return this.http.put(environment.apiUrl + "product/" + id, body);
  }

  updateDeals(id, body) {
    return this.http.put(environment.apiUrl + "deals/" + id, body);
  }
  updateStore(id, body) {
    return this.http.put(environment.apiUrl + "stores/" + id, body);
  }
}
