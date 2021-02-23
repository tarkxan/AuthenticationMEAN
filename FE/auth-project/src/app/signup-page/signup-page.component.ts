import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  login_form: FormGroup | undefined

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
