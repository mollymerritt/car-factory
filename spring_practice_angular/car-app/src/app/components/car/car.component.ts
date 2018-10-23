import { Component, OnInit } from '@angular/core';
import { CarService } from './../../services/car.service';
import { Car } from './../../models/car.model';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { CarRequest } from 'src/app/models/car-request.model';
import { User } from 'src/app/models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  private ifRequest: boolean;

  private make: string;
  private model: string;
  private year: number;
  private trim: string;
  private type: string;
  private price: number;
  private cityMileage: number;
  private highwayMileage: number;
  private combinedMileage: number;

  private user: User;
  private carRequest: CarRequest;
  private car: Car;
  private cars: Car[];

  constructor(
    private carService: CarService,
    private router: Router,
    private navbarService: NavbarService,
    private cookieService: CookieService) { }

  ngOnInit() {
    if (!this.navbarService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }

    this.user = JSON.parse(this.cookieService.get('user'));
    this.ifRequest = false;

    this.carService.findAllCars().subscribe(
      data => {
        this.cars = data;
      }
    );
  }

  requestButton() {
    this.ifRequest = !this.ifRequest;
    this.addCarRequest();
  }

  // addCar() {
  //   this.addNewCar(function() {
  //     this.addCarRequest();
  //   });
  // }
  // addCar() {
  //   this.addCarRequest(function() {
  //     this.addNewCar();
  //     console.log(this.car);
  //   });
  // }

  addCar() {
    console.log('in addNewCar() method');
    // this.addCarRequest();
    this.carService.addCar(this.carRequest,
      this.make,
      this.model,
      this.year,
      this.trim,
      this.type,
      this.price,
      this.cityMileage,
      this.highwayMileage,
      this.combinedMileage).subscribe(
        data => {
          this.car = data;
        }
      );
      console.log(this.car);
      this.carService.findAllCars().subscribe(
        data => {
          this.cars = data;
        }
      );
      console.log(this.cars);
  }

  addCarRequest() {
    console.log('in addCarRequest() method');
    this.carRequest = { id: 0, user: this.user, dateRequested: null };
    this.carService.addCarRequest(this.carRequest).subscribe(
      data => {
        this.carRequest = data;
      }
    );
  }

  deleteCar(c: Car) {
    console.log('deleting car');
    console.log(c);
    this.carService.deleteCar(c).subscribe();
    // this.cars.splice(c.id, 1);
    this.carService.findAllCars().subscribe(
      data => {
        this.cars = [];
        this.cars = data;
        console.log(data);
      }
    );
    console.log('end of deleteCar method');
    console.log('cars' + this.cars);
  }

}
