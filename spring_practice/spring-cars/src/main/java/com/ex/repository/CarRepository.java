package com.ex.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ex.beans.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {
	
	public Car findById(int id);
	public void deleteById(int id);
	
}
