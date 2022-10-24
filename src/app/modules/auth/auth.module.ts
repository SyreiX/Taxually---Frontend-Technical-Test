import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthWrapperComponent } from './containers/auth-wrapper/auth-wrapper.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

const routes = [
  {
    path: '',
    component: AuthWrapperComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthWrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class AuthModule {
}
