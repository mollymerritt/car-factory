package com.ex.controllers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ex.beans.CarRequest;
import com.ex.services.CarRequestService;

@RestController
@RequestMapping("/car-requests")
@CrossOrigin()
public class CarRequestController {

	@Autowired
	private CarRequestService carRequestService;

	// ADD CAR REQUEST
	@Transactional
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<CarRequest> addCarRequest(@RequestBody CarRequest carRequest) {
		System.out.println();
		System.out.println("IN CAR-REQUEST-CONTROLLER POST METHOD");
		System.out.println(carRequest.getUser());
		System.out.println(carRequest + "\n");
		carRequest = carRequestService.addCarRequest(carRequest);
		System.out.println(carRequest);
		return carRequest == null ? new ResponseEntity<CarRequest>(carRequest, HttpStatus.CONFLICT)
				: new ResponseEntity<CarRequest>(carRequest, HttpStatus.CREATED);
	}

	// GET ALL
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<CarRequest>> getAll() {
		List<CarRequest> carRequests = carRequestService.findAll();
		return carRequests.size() == 0 ? new ResponseEntity<List<CarRequest>>(carRequests, HttpStatus.NOT_FOUND)
				: new ResponseEntity<List<CarRequest>>(carRequests, HttpStatus.OK);
	}

	// GET BY ID
	@GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<CarRequest> getById(@PathVariable int id) {
		CarRequest carRequest = carRequestService.findById(id);
		return carRequest == null ? new ResponseEntity<CarRequest>(carRequest, HttpStatus.NOT_FOUND)
				: new ResponseEntity<CarRequest>(carRequest, HttpStatus.OK);
	}

	// UPDATE
	@PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<CarRequest> updateCarRequest(@PathVariable int id, @RequestBody CarRequest carRequest) {
		carRequest.setId(id);
		CarRequest cr = carRequestService.findById(id);
		return cr == null ? new ResponseEntity<CarRequest>(carRequestService.update(carRequest), HttpStatus.NOT_FOUND)
				: new ResponseEntity<CarRequest>(carRequestService.update(carRequest), HttpStatus.OK);
	}

	// DELETE
	@DeleteMapping
	public ResponseEntity<CarRequest> deleteCarRequest(@RequestBody CarRequest carRequest) {
		carRequestService.delete(carRequest);
		return new ResponseEntity<CarRequest>(carRequest, HttpStatus.OK);
	}

	// DELETE BY ID
	@DeleteMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<CarRequest> deleteUserById(@PathVariable int id) {
		CarRequest carRequest = carRequestService.findById(id);
		carRequestService.deleteById(id);
		return carRequest == null ? new ResponseEntity<CarRequest>(carRequest, HttpStatus.NOT_FOUND)
				: new ResponseEntity<CarRequest>(carRequest, HttpStatus.OK);
	}

}
