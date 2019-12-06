import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileInput } from 'ngx-material-file-input';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private uploadUrl = 'api/upload/image';

  constructor(private http: HttpClient) { }

  createProduct(image: FileInput): Observable<Object> {
    return this.http.post(this.uploadUrl, image);
  }
}
