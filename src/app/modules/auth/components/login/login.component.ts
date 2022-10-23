import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_PATTERN, PASSWORD_PATTERN, User } from '../../definitions/auth.models';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tax-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  onSubmit(): void {
    const {email, password} = this.loginForm.controls;
    this.authService.login(email.value!, password.value!).subscribe(
      (user: User | null) => {
        this.router.navigate(['dashboard']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
