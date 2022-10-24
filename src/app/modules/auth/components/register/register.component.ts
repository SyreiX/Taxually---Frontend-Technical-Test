import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_PATTERN, PASSWORD_PATTERN, User } from '../../definitions/auth.models';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'tax-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // TODO: Inline form errors
  regForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }

  onSubmit(): void {
    const {firstName, lastName, email, password} = this.regForm.controls;
    this.authService.register(firstName.value!, lastName.value!, email.value!, password.value!).subscribe(
      (user: User | null) => {
        this.toastr.success(`Welcome, ${user?.firstName}!`);
        this.router.navigate(['dashboard']);
      },
      err => {
        this.toastr.error(err);
      }
    );
  }
}
