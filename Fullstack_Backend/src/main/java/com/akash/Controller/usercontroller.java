package com.akash.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akash.exception.UserNotFoundException;
import com.akash.model.User;
import com.akash.repository.userrepo;

@RestController
@CrossOrigin
public class usercontroller {
  
//	@RequestMapping("/")
//	public String hello() {
//		return "hello";
//	}
	@Autowired
	private userrepo repo;
	
	@PostMapping("/user")
	public User adduser(@RequestBody  User newuser) {
		return repo.save(newuser);
	}
	
	@GetMapping("/users")
	public List<User> alluser(){
		return repo.findAll();
	}
	
	@GetMapping("/user/{id}")
	public User findbyid(@PathVariable("id")int id) {
		return repo.findById(id).get();
		
	}
	
	@DeleteMapping("/user/{id}")
	public String deletebyid(@PathVariable("id") int id) {
		repo.deleteById(id);
		return id+" has been deleted succesfully";	
	}
	
	@PutMapping("user/{id}")
	public User updateuser(@PathVariable("id")int id,
			@RequestBody User user) {
		user.setName(user.getName());
		user.setEmail(user.getEmail());
		return repo.save(user);
		
	}
}
