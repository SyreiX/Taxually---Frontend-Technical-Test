import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FileService } from '../../services/file.service';
import { File } from '../../definitions/file';

@Component({
  selector: 'tax-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  files$: Observable<File[]> = this.fileService.getFiles$();

  viewMode: BehaviorSubject<string> = new BehaviorSubject<string>('list');

  constructor(private fileService: FileService) {
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
