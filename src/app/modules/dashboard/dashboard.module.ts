import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FileListComponent } from './components/file-list/file-list.component';
import { FileGroupComponent } from './components/file-group/file-group.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

const routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    FileListComponent,
    FileGroupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbAccordionModule
  ]
})
export class DashboardModule {
}
