import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    this.cookieService.deleteAll();
    this.router.navigate(['/home']);
  }
}
