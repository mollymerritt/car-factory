import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private user: User;
  private firstName: string;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.user = JSON.parse(this.cookieService.get('user'));
    this.firstName = this.user.firstname;
  }

}
