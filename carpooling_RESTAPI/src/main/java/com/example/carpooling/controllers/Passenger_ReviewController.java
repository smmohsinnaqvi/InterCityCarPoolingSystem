package com.example.carpooling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.AddPassenger_Review;
import com.example.carpooling.models.Login;
import com.example.carpooling.models.LoginCheck;
import com.example.carpooling.models.Passenger_Review;
import com.example.carpooling.models.Ride;
import com.example.carpooling.models.User;
import com.example.carpooling.services.Passenger_ReviewService;
import com.example.carpooling.services.RideService;
import com.example.carpooling.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Passenger_ReviewController {
	
	@Autowired
	UserService uservice;
	
	@Autowired
	Passenger_ReviewService prservice;
	
	@Autowired
	RideService rservice;
	
	
	@GetMapping("/getAllPassenger_Review")
	public List<Passenger_Review> getAllPassengerReview()
	{
		return prservice.getAllPassenger_Review();
	}
	
	@GetMapping("/getOnePassenger_ReviewById")
	public Passenger_Review getOnePassenger_Review(@RequestParam("passenger_id")int passenger_id)
	{
		return prservice.getOnePassengerReview(passenger_id);
	}
	
	
	@PostMapping("/addPassenger_Review")
	public Passenger_Review savePassenger_Review(@RequestBody AddPassenger_Review adpr)
	{
		User u=uservice.getUserId(adpr.getPassenger_id());
		Ride r=rservice.getOneRide(adpr.getRide_id());
		double rating=adpr.getRating();
		String comments=adpr.getComments();
		
		Passenger_Review pr=new Passenger_Review(rating,comments,u,r);
		return prservice.savePassenger_Review(pr);
	}
}
