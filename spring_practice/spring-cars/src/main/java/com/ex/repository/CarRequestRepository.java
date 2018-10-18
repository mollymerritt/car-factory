package com.ex.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ex.beans.CarRequest;

@Repository
public interface CarRequestRepository extends JpaRepository<CarRequest, Integer> {
	
	public CarRequest findById(int id);
	public void deleteById(int id);

}
