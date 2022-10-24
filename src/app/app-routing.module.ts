import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/auth/auth.module').then(modules => modules.AuthModule)
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        // TODO: AuthGuard
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(modules => modules.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
