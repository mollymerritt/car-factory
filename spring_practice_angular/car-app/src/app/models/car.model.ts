import { CarRequest } from '../models/car-request.model';

export class Car {
    id: number;
    carRequest: CarRequest;
    make: string;
    model: string;
    year: number;
    trim: string;
    type: string;
    price: number;
    cityMileage: number;
    highwayMileage: number;
    combinedMileage: number;
}
