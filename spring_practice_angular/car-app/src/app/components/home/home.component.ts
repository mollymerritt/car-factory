import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit() {
  }

  routeLogin() {
    this.router.navigate(['/login']);
  }

  routeRegister() {
    this.router.navigate(['/register']);
  }

}
