import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../../../shared/models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private uploadUrl = 'api/upload/image';

  constructor(private http: HttpClient) {
  }

  uploadImage(image: File): Observable<Image> {
    const formData: FormData = new FormData();
    formData.append('file', image);
    return this.http.post<Image>(this.uploadUrl, formData);
  }
}
