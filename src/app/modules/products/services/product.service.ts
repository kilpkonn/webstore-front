import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product';
import {Params} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  getFilteredProducts(params: Params) {
    console.log(params.category);
    let prms = new HttpParams();
    if (params.category !== undefined) {
      prms = prms.set('category', params.category);
    }
    if (params.name !== undefined) {
      prms = prms.set('name', params.name);
    }
    if (params.sort !== undefined) {
      prms = prms.set('sort', params.sort);
    }
    if (params.order !== undefined) {
      prms = prms.set('order', params.order);
    }
    return this.http.get<Product[]>(this.url, {params: prms});
  }

  getImage(id: number): Observable<Blob> {
    return this.http.get(`${this.url}/${id}/image`, {responseType: 'blob'});
  }

  getSearchedProducts(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, {
      params: new HttpParams().set('name', name)});
  }

  createProduct(product: Object): Observable<Object> {
    return this.http.post(this.url, product);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(this.url + '/' + id, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);  // TODO: some fancy format, maybe handle response
  }
}

