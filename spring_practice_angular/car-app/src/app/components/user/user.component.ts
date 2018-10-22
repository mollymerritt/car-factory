import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavbarService } from 'src/app/services/navbar.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user: User;

  constructor(
    private navbarService: NavbarService,
    private router: Router,
    private cookieService: CookieService) { }

  ngOnInit() {
    if (!this.navbarService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
    this.user = JSON.parse(this.cookieService.get('user'));
  }

}
