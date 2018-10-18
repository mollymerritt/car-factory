package com.ex.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.Car;
//import com.ex.beans.CarId;
import com.ex.repository.CarRepository;

@Service
public class CarService {
	
	@Autowired
	private CarRepository carRepository;
	
	public Car addCar(Car car) {
		return carRepository.save(car);
	}
	
	public Car update(Car car) {
		return carRepository.save(car);
	}
	
	public Car findById(int id) {
		return carRepository.findById(id);
	}
	
	public List<Car> findAll() {
		return carRepository.findAll();
	}
	
	public void delete(Car car) {
		carRepository.delete(car);
	}
	
	public void deleteById(int id) {
		carRepository.deleteById(id);
	}
	
}
