package com.ex.controllers;

import java.util.List;

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

import com.ex.beans.User;
import com.ex.services.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
	
	// ADD USER
	@PostMapping(consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> addUser(@RequestBody User user) {
		user = userService.addUser(user);
		return user == null
				? new ResponseEntity<User>(user, HttpStatus.CONFLICT)
				: new ResponseEntity<User>(user, HttpStatus.CREATED);
	}
	
	// GET ALL
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<User>> getAll() {
		List<User> users = userService.findAll();
		return users.size() == 0
			? new ResponseEntity<List<User>>(users, HttpStatus.NOT_FOUND)
			: new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	// GET BY ID
	@GetMapping(value="/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> getById(@PathVariable int id) {
		User user = userService.findById(id);
		return user == null
				? new ResponseEntity<User>(user, HttpStatus.NOT_FOUND)
				: new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	// UPDATE
	@PutMapping(value="/{id}", consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User user) {
		user.setId(id);
		User u = userService.findById(id);
		return u == null
				? new ResponseEntity<User>(userService.update(user), HttpStatus.NOT_FOUND)
				: new ResponseEntity<User>(userService.update(user), HttpStatus.OK);
	}
	
	// DELETE
	@DeleteMapping(consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> deleteUser(@RequestBody User user) {
		userService.delete(user);
		return user == null
				? new ResponseEntity<User>(user, HttpStatus.NOT_FOUND)
				: new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	// DELETE BY ID
	@DeleteMapping(value="/{id}", consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> deleteUserById(@PathVariable int id) {
		User user = userService.findById(id);
		userService.deleteById(id);
		return user == null
				? new ResponseEntity<User>(user, HttpStatus.NOT_FOUND)
				: new ResponseEntity<User>(user, HttpStatus.OK);
	}

}
