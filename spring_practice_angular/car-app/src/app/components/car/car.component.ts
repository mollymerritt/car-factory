import { Component, OnInit } from '@angular/core';
import { CarService } from './../../services/car.service';
import { Car } from './../../models/car.model';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  private make: string;
  private model: string;
  private year: number;
  private trim: string;
  private type: string;
  private price: number;
  private cityMileage: number;
  private highwayMileage: number;
  private combinedMileage: number;

  private car: Car;
  private cars: Car[];

  constructor(
    private carService: CarService,
    private router: Router,
    private navbarService: NavbarService) { }

  ngOnInit() {
    if (!this.navbarService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }

    this.carService.findAllCars().subscribe(
      data => {
        this.cars = data;
      }
    );
  }

  addCar() {
    this.carService.addCar(this.make,
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
      this.carService.findAllCars().subscribe(
        data => {
          this.cars = data;
        }
      );
  }

  deleteCar(c: Car) {
    console.log('deleting car');
    console.log(c);
    this.carService.deleteCar(c).subscribe();
    this.carService.findAllCars().subscribe(
      data => {
        this.cars = [];
        this.cars = data;
        console.log(data);
      }
    );
    console.log('end of deleteCar method');
  }

}
