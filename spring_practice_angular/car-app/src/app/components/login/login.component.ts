import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;
  private user: User;

  private invalidLogin: boolean;

  constructor(
    private router: Router,
    private auth: AuthService,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.invalidLogin = false;
  }

  login() {
    console.log('in login method');
    this.auth.login(this.username, this.password).subscribe(
      data => {
        this.user = data;
        if (this.user.id === 0) { // incorrect login information
          this.invalidLogin = true;
        } else {  // correct login information

          console.log('this.user');
          console.log(this.user);

          // this.cookieService.deleteAll(); // is this necessary?
          this.cookieService.set('user', JSON.stringify(this.user));
          // console.log(this.cookieService.getAll());
          this.invalidLogin = false;
          this.router.navigate(['/car']);
        }
      }
    );
  }

}
