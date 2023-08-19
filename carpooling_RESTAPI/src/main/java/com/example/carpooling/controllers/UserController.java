package com.example.carpooling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.User;
import com.example.carpooling.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	UserService us;
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers()
	{
		List<User> l=us.getUsers();
		for(User e : l)
		{
			System.out.println(e);
		}
		return us.getUsers();
	}
	
	@PostMapping("/logincheck")
	public List<User> logincheck(@RequestParam("email") String loginid, @RequestParam("pwd") String password)
	{
		return us.logincheck(loginid, password);
	}

}