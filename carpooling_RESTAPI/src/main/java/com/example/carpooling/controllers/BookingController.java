package com.example.carpooling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.Booking;
import com.example.carpooling.services.BookingService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookingController {
	
	@Autowired
	BookingService bservice;
	
	@GetMapping("/getBooking")
	public List<Booking> getAllBooking()
	{
		return bservice.getBookingDetails();
	}
	

}
