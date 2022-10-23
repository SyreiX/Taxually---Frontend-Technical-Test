import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from './definitions/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  login(email: string, password: string): Observable<User | null> {
    const userByEmail = Object.keys(localStorage).find(key => key.includes(email));
    if (!userByEmail || userByEmail !== email + password) {
      return throwError(() => new Error("The email address or password is incorrect."));
    }
    const userData = localStorage.getItem(email + password);
    const user = {firstName: userData!.split('.')[0], lastName: userData!.split('.')[1], email};
    return of(user);
  }

  register(firstName: string, lastName: string, email: string, password: string): Observable<User | null> {
    const isAlreadyRegistered = Object.keys(localStorage).some(key => key.includes(email));
    if (isAlreadyRegistered) {
      return throwError(() => new Error("The email address or password is incorrect."));
    }

    localStorage.setItem(email + password, firstName + '.' + lastName);
    return of(null);
  }
}
