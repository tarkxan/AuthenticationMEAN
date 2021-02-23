import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  private login_url = '/api/auth/login'

  constructor(
    private auth: AuthService,
    private router: Router) { }

  // returns true / false,  meaning if a user is allowed to visit the url
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      if (this.auth.is_authenticated()) {
        
        // "of" allows to create observables
        return of(true)
      } else {
        this.router.navigate([this.login_url],
          {
            queryParams: {
              accessDenied: true
            }
          }
        )

        // "of" allows to create observables
        return of(false)
      }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      return this.canActivate(route, state)
  }
}
