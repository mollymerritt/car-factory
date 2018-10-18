package com.ex.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.User;
import com.ex.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User addUser(User user) {
		return userRepository.save(user);
	}
	
	public User update(User user) {
		return userRepository.save(user);
	}
	
	public List<User> findAll() {
		return userRepository.findAll();
	}
	
	public User findById(int id) {
		return userRepository.findById(id);
	}
	
	public void delete(User user) {
		userRepository.delete(user);
	}
	
	public void deleteById(int id) {
		userRepository.deleteById(id);
	}

}
