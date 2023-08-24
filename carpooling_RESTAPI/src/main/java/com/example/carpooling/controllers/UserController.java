package com.example.carpooling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.Login;
import com.example.carpooling.models.Role;
import com.example.carpooling.models.User;
import com.example.carpooling.models.UserReg;
import com.example.carpooling.services.LoginService;
import com.example.carpooling.services.RoleService;
import com.example.carpooling.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController 
{
	@Autowired
	UserService uservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	@GetMapping("/getUser")
	public User getUser(@RequestParam("login_id") int login_id)
	{
		Login l=lservice.getById(login_id);
		return uservice.getUser(l);
	}
	
	@PostMapping("/regUser")
	public User regUser(@RequestBody UserReg ur)
	{
		Role r=rservice.getRole(ur.getSelect());//2 means decided at 2nd id for user role
		Login l=new Login(ur.getPrimary_email(),ur.getPassword(),r,false);

		Login saved=lservice.save(l);
		
		User u=new User(ur.getPassword(),ur.getFname(),ur.getLname(),ur.getGender(),ur.getDob(),ur.getAadhar(),ur.getLicence(),ur.getPhone_no(),ur.getPrimary_email(),ur.getSecondary_email(),saved);
		return uservice.saveUser(u);
	}
	
	@GetMapping("/getAllUser")
	public List<User> getAllUsers()
	{
		return uservice.getUsers();
	}
	
}
