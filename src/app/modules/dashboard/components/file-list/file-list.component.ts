import { Component, EventEmitter, Input, Output } from '@angular/core';
import { File } from '../../definitions/file';

@Component({
  selector: 'tax-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent {
  @Input() files: File[] | null = [];
  @Output() delete: EventEmitter<string> = new EventEmitter();
}
