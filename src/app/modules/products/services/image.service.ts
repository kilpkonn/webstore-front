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

  uploadImage(image: File): Observable<Object> {
    console.log(image);
    const formData: FormData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post(this.uploadUrl, image);
  }
}
