import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { File } from '../../definitions/file';

@Component({
  selector: 'tax-file-group',
  templateUrl: './file-group.component.html',
  styleUrls: ['./file-group.component.scss']
})
export class FileGroupComponent implements OnInit {
  @Input() files: File[] = [];
  @Output() delete: EventEmitter<string> = new EventEmitter();

  groups: any;

  objectKeys = Object.keys;

  ngOnInit(): void {
    this.groups = this.groupFiles();
  }

  groupFiles() {
    return this.files.reduce((rv: any, file: File) => {
      (rv[file.mimeType] = rv[file.mimeType] || []).push(file);
      return rv;
    }, {});
  };
}
