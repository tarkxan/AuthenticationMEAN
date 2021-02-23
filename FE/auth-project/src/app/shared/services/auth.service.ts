import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private login_url = '/api/auth/login'
  private token: string | undefined

  constructor(private http: HttpClient) {

  }

  login(user: User): Observable<{token: string}> {

      return this.http.post<{token: string}>(this.login_url, user)
        .pipe(
           // tap allows to fetch data from stream
          tap(({token}) => {
            localStorage.setItem('auth-token', token)
            this.set_token(token)
          })
        )
  }

  // to save a token in the instance variable
  set_token(token: string | undefined) {
    this.token = token
  }

  get_token(): string | undefined {
    return this.token
  }

  is_authenticated(): boolean {
    return !!this.token
  }

  // on logout remove token from instance variable and from a browser local storage
  logout() {
    this.set_token(undefined)
    localStorage.clear()
  }

  sign_up(user: User) {
      
  }
}