import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'auth-project';

  constructor(private auth: AuthService) {

  }

  ngOnInit() {

    const storage_token = localStorage.getItem('auth-token') || undefined

    // is used when a page is refreshed and token value is removed from component
    // in this case we fetch the value from a browser local storage
    if (storage_token !== undefined) {
      this.auth.set_token(storage_token)
    }
  }
}
