import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../shared/interfaces/user';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  loginForm: FormGroup = new FormGroup({})
  subsrib: Subscription = new Subscription

  // productForm = new FormGroup({
  //   reference: new FormControl(),
  //   quantity: new FormControl('11')
  // }); 

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      password: new FormControl(
        null, 
        [Validators.required, Validators.minLength(6)]
      )
    })

    // has all information about the currebt route
    this.route.queryParams.subscribe((params: Params) => {
      
      if (params['registered']) {

        console.log('You can login suing your credentials')
      } else if(params['accessDenied']) {
        console.log('Please login first')
      }

    })
  }

  // invoked when a button "Login" clicked
  onSubmit() {

    // disable form for the time of request
    this.loginForm.disable()

    // const user: User = {
    //   email: this.loginForm.value.email,
    //   password: this.loginForm.value.password
    // }

    this.subsrib = this.auth.login(this.loginForm.value).subscribe(
      () => {
        console.log('Login success')
        this.router.navigate(['/overwiev'])
      },
      (error) => {
        console.warn(`Login failed: ${error}`)
        this.loginForm.enable()
      }
    )
  }

  // to destroy resources when component is ot in use anymore
  ngOnDestroy() {
    if (this.subsrib)
      this.subsrib.unsubscribe()
  }

}
