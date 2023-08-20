package com.example.carpooling.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.Login;
import com.example.carpooling.models.User;
import com.example.carpooling.services.LoginService;
import com.example.carpooling.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController 
{
	@Autowired
	UserService uservice;
	
	@Autowired
	LoginService lservice;
	
	@GetMapping("/getUser")
	public User getUser(@RequestParam("login_id") int login_id)
	{
		Login l=lservice.getById(login_id);
		return uservice.getUser(l);
	}
	
}
