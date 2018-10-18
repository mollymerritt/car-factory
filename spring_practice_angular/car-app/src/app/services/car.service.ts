import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Car } from './../models/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  addCar(make: string, model: string, year: number, trim: string, type: string, price: number,
        cityMileage: number, highwayMileage: number, combinedMileage: number): Observable<any> {
    const car = { make: make, model: model, year: year, trim: trim, type: type, price: price,
        cityMileage: cityMileage, highwayMileage: highwayMileage, combinedMileage: combinedMileage };
    return this.http.post<any>('http://localhost:5555/cars', car);
  }

}
