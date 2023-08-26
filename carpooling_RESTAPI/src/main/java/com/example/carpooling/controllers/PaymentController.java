package com.example.carpooling.controllers;

import java.time.LocalDateTime;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.AddPayment;
import com.example.carpooling.models.Booking;
import com.example.carpooling.models.Payment;
import com.example.carpooling.models.User;
import com.example.carpooling.services.BookingService;
import com.example.carpooling.services.PaymentService;
import com.example.carpooling.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController 
{
	@Autowired
	PaymentService pservice;
	
	@Autowired
	BookingService bservice;
	
	@Autowired
	UserService uservice;
	
	@PostMapping("/savePayment")
	public Payment savePayment(@RequestBody AddPayment addp)
	{
		User u= uservice.getUserId(addp.getUser_id());
		Booking b= bservice.getBookingId(addp.getBooking_id());
		int amount=addp.getAmount();
		LocalDateTime date_time=addp.getDate_time();
		String payment_method=addp.getPayment_method();
		String status=addp.getStatus();
		
		Payment p=new Payment(amount, date_time, payment_method, status, u, b);
		return pservice.save(p);
	}
}
