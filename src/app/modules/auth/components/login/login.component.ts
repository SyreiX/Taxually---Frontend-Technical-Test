import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_PATTERN, PASSWORD_PATTERN, User } from '../../definitions/auth.models';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'tax-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // TODO: Inline form errors
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }

  onSubmit(): void {
    const {email, password} = this.loginForm.controls;
    this.authService.login(email.value!, password.value!).subscribe(
      (user: User | null) => {
        this.toastr.success(`Welcome back, ${user?.firstName}!`);
        this.router.navigate(['dashboard']);
      },
      err => {
        this.toastr.error(err);
      }
    );
  }
}
