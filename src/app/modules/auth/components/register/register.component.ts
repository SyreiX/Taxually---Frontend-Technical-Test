import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_PATTERN, PASSWORD_PATTERN, User } from '../../definitions/auth.models';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'tax-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  regForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  onSubmit(): void {
    const {firstName, lastName, email, password} = this.regForm.controls;
    this.authService.register(firstName.value!, lastName.value!, email.value!, password.value!).subscribe(
      (user: User | null) => {
        console.log(user);
      },
      err => {
        console.log(err);
      }
    );
  }
}
