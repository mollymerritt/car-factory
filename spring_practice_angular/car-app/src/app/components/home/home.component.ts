import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private navbarService: NavbarService) { }

  ngOnInit() {
    if (this.navbarService.isLoggedIn()) {
      this.router.navigate(['/landing']);
    }
  }

  routeLogin() {
    this.router.navigate(['/login']);
  }

  routeRegister() {
    this.router.navigate(['/register']);
  }

}
