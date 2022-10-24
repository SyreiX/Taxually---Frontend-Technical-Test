import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGroupComponent } from './file-group.component';

describe('FileGroupComponent', () => {
  let component: FileGroupComponent;
  let fixture: ComponentFixture<FileGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
