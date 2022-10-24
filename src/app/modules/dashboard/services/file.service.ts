import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { File } from '../definitions/file';

const API_URL: string = "https://file.io";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  public getFiles(): Observable<File[]> {
    // @ts-ignore
    return this.http.get(API_URL).pipe(map(data => data.nodes));
  }

  public uploadFiles(files: any): void {
    const formData = new FormData();
    // @ts-ignore
    Array.from(files).forEach(file => formData.append('file', file));

    this.http.post(API_URL, formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          // Progress
        } else if (event instanceof HttpResponse) {
          // Done
        }
      });
  }

  public deleteFile(key: string): void {
    this.http.delete(`${API_URL}/${key}`).subscribe();
  }
}
