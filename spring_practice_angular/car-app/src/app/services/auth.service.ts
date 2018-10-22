import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(username: string, password: string): Observable<any> {
    const user = { username: username, password: password };
    return this.http.post<any>('http://localhost:5555/login', user);
  }

  register(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:5555/users', user);
  }
}
