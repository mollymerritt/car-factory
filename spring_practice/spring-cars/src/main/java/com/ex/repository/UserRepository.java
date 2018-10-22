package com.ex.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.beans.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	public User findById(int id);
	public User findByUsername(String username);
	public void deleteById(int id);

}
