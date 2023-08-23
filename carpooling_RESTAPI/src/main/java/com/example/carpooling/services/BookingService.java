package com.example.carpooling.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.carpooling.models.Booking;
import com.example.carpooling.repositories.BookingRepository;

@Service
public class BookingService {
	
	BookingRepository brepo;
	
	public List<Booking> getBookingDetails( )
	{
		return brepo.findAll();
	}

}
