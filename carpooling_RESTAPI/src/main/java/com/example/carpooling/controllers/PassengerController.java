package com.example.carpooling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.ExtraPassenger;
import com.example.carpooling.models.Login;
import com.example.carpooling.models.Passenger;
import com.example.carpooling.models.Role;
import com.example.carpooling.models.User;
import com.example.carpooling.models.UserReg;
import com.example.carpooling.services.LoginService;
import com.example.carpooling.services.PassengerService;
import com.example.carpooling.services.RoleService;
import com.example.carpooling.services.UserService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PassengerController {
	
	@Autowired
	PassengerService pservice;
	
	@Autowired
	UserService uservice;
	
	@GetMapping("/getPassenger")
	public List<Passenger> getAllPassenger()
	{
		return pservice.getPassenger();
	}
	
	
	@PostMapping("/insertPassenger")
	public Passenger savePassenger(@RequestBody ExtraPassenger ep ) {
		
		System.out.println(ep);
		User u=uservice.getUser(ep.getUser_id());
		Passenger passenger=new Passenger(ep.getAadhar_no(),ep.getPhone_no(),ep.getEmail(),ep.getFname(),ep.getLname(),ep.getGender(),u);
		return pservice.savePassenger(passenger);
		
		
	}
	


}

