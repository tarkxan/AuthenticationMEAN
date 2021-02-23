import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuardService } from './shared/classes/auth-guard.service';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  // {path: 'login', component: LoginPageComponent}
  {
    path: '', children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'signup', component: SignupPageComponent},
    ]
  },
  {
    path: 'home', component: SignupPageComponent, canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
