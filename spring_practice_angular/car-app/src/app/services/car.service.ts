import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Car } from './../models/car.model';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { User } from 'src/app/models/user.model';
import { CarRequest } from 'src/app/models/car-request.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  addCar(carRequest: CarRequest, make: string, model: string, year: number, trim: string, type: string, price: number,
        cityMileage: number, highwayMileage: number, combinedMileage: number): Observable<any> {
    const car = { carRequest: carRequest, make: make, model: model, year: year, trim: trim, type: type, price: price,
        cityMileage: cityMileage, highwayMileage: highwayMileage, combinedMileage: combinedMileage };
    return this.http.post<any>('http://localhost:5555/cars', car);
  }

  findAllCars(): Observable<any> {
    return this.http.get<any>('http://localhost:5555/cars');
  }

  deleteCar(car: Car): Observable<any> {
    const id = car.id;
    console.log(`deleting car by id: ${id}`);
    return this.http.delete<any>(`http://localhost:5555/cars/${id}`);
  }

  addCarRequest(carRequest: CarRequest): Observable<any> {
    return this.http.post<any>('http://localhost:5555/car-requests', carRequest);
  }

}
