import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  productForm = new FormGroup({
    reference: new FormControl(),
    quantity: new FormControl('11')
}); 

  constructor() { }

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
  }

  onSubmit() {

  }

}
