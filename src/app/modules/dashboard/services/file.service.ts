import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { File } from '../definitions/file';
import { ToastrService } from 'ngx-toastr';

const API_URL: string = "https://file.io";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private files$: BehaviorSubject<File[]> = new BehaviorSubject<File[]>([]);

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.fetchFiles();
  }

  public getFiles$(): Observable<File[]> {
    return this.files$;
  }

  public fetchFiles(): void {
    // @ts-ignore
    this.http.get(API_URL).pipe(map(data => data.nodes)).pipe(take(1)).subscribe((files: File[]) => this.files$.next(files));
  }

  public uploadFiles(files: any): void {
    if (!files) {
      return;
    }

    const formData = new FormData();
    // @ts-ignore
    Array.from(files).forEach(file => formData.append('file', file));

    this.http.post(API_URL, formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          // Progress
        } else if (event instanceof HttpResponse) {
          this.toastr.info(`${(event.body as File).name} has been uploaded.`);
          const file: File = event.body as File;
          const files = [...this.files$.value];
          files.push(file);
          this.files$.next(files);
        }
      });
  }

  public deleteFile(key: string): void {
    this.http.delete(`${API_URL}/${key}`).subscribe(res =>{
      this.files$.next(this.files$.value.filter((file: File) => file.key !== key));
      this.toastr.info(`File has been deleted.`);
    });
  }
}
