import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product';

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

  getFilteredProducts(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, {
      params: new HttpParams().set('category', category)});
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
    return this.http.delete(this.url + '/' + id);  //TODO: some fancy format, maybe handle response
  }
}

