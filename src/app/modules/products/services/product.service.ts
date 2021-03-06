import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'api/products';

  constructor(private http: HttpClient) {
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${ this.url }/${ id }`);
  }

  getFilteredProducts(params: Params) {
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

  /*
   getImage(id: number): Observable<Blob> {
   return this.http.get(`${this.url}/${id}/image`, {responseType: 'blob'});
   }
   */

  getSearchedProducts(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, {
      params: new HttpParams().set('name', name)
    });
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  updateProduct(id: number, value: any): Observable<Product> {
    return this.http.put<Product>(`${ this.url }/${ id }`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${ this.url }/${ id }`);  // TODO: maybe handle response
  }
}

