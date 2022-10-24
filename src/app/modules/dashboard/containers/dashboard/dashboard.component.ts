import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { FileService } from '../../services/file.service';
import { File } from '../../definitions/file';

@Component({
  selector: 'tax-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  files$: Observable<File[]> = EMPTY;

  viewMode: BehaviorSubject<string> = new BehaviorSubject<string>('list');

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
    this.files$ = this.fileService.getFiles();
  }

  upload(target: any) {
    this.fileService.uploadFiles(target.files);
  }

  delete(key: string) {
    this.fileService.deleteFile(key);
  }

  setViewMode(viewMode: string): void {
    this.viewMode.next(viewMode);
  }
}
