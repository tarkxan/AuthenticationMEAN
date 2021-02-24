import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  // is a method of a class HttpInterceptor that should be implemented
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

      if (this.auth.is_authenticated()) {

        // we modify request to prevent it from mutation
        request = request.clone({
          setHeaders: {
            // send token in http request
            Authorization: this.auth.get_token() || ''
          }
        })
      }
      
      return next.handle(request)
  }
}
