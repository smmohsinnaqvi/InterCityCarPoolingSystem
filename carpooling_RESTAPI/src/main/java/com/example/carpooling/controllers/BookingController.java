package com.example.carpooling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.Booking;
import com.example.carpooling.services.BookingService;

@RestController
public class BookingController 
{
	@Autowired
	BookingService bservice;
	
	@GetMapping("/getAllBookings")
	public List<Booking> getAllBookings()
	{
		return bservice.getAllBookings();
	}
	
	@GetMapping("/getOneBooking")
	public Booking getOneBooking(@RequestParam("bid") int bid)
	{
		return bservice.getOneBooking(bid);
	}
	
	@GetMapping("/getOneBook/{bid}")
	public Booking getOneB(@PathVariable("bid") int bid)
	{
		return bservice.getOneBooking(bid);
	}
}
