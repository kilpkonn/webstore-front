import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private uploadUrl = 'api/upload/image';

  constructor(private http: HttpClient) {
  }

  uploadImage(image: File): Observable<Object> {
    console.log(image);
    const formData: FormData = new FormData();
    formData.append('file', image);
    return this.http.post(this.uploadUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data;boundary=' + image.size,
      }
    });
  }
}
