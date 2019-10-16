import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../../shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = 'api/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }
}
