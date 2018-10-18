package com.ex.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.CarRequest;
import com.ex.repository.CarRequestRepository;

@Service
public class CarRequestService {
	
	@Autowired
	private CarRequestRepository carRequestRepository;
	
	public CarRequest addCarRequest(CarRequest carRequest) {
		System.out.println("\n" + "IN CAR-REQUEST-SERVICE ADDCAR");
		System.out.println(carRequest + "\n");
		return carRequestRepository.save(carRequest);
	}
	
	public CarRequest update(CarRequest carRequest) {
		return carRequestRepository.save(carRequest);
	}
	
	public CarRequest findById(int id) {
		return carRequestRepository.findById(id);
	}
	
	public List<CarRequest> findAll() {
		return carRequestRepository.findAll();
	}
	
	public void delete(CarRequest carRequest) {
		carRequestRepository.delete(carRequest);
	}
	
	public void deleteById(int id) {
		carRequestRepository.deleteById(id);
	}

}
