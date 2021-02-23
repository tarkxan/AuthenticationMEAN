import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit, OnDestroy {

  signupForm: FormGroup = new FormGroup({})
  subsrib: Subscription = new Subscription

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      email: new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      password: new FormControl(
        null, 
        [Validators.required, Validators.minLength(6)]
      )
    })
  }

  onSubmit() {
    // disable form for the time of request
    this.signupForm.disable()

    this.subsrib = this.auth.sign_up(this.signupForm.value).subscribe(
      () => {

        this.router.navigate(
          ['/login'],
          {queryParams: {
            registered: true
          }})
      },
      (error) => {
        console.warn(error)
        this.signupForm.enable()
      }
    )
  }

  // to destroy resources when component is ot in use anymore
  ngOnDestroy() {
    if (this.subsrib)
      this.subsrib.unsubscribe()
  }

}
