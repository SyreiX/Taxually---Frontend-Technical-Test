import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { FileService } from '../../services/file.service';
import { File } from '../../definitions/file';

@Component({
  selector: 'tax-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  files$: Observable<File[]> = EMPTY;

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
    this.files$ = this.fileService.getFiles();
  }

  upload(target: any) {
    this.fileService.uploadFiles(target.files);
  }
}
