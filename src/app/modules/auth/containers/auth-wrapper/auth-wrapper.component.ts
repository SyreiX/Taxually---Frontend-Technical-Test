import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tax-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss'],
  host: {'class': 'card p-4'}
})
export class AuthWrapperComponent implements OnInit {
  isLogin: boolean = false;

  ngOnInit(): void {
  }

  toggleLogin(): void {
    this.isLogin = !this.isLogin;
  }
}
