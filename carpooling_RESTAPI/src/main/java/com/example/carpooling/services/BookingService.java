package com.example.carpooling.services;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.carpooling.models.Booking;
import com.example.carpooling.models.User;
import com.example.carpooling.repositories.BookingRepository;

@Service
public class BookingService 
{
	@Autowired
	BookingRepository brepo;
	
	public List<Booking> getAllBookings()
	{
		return brepo.findAll();
	}
	
	public Booking getOneBooking(int bid)
	{
		Optional<Booking> obook=brepo.findById(bid);
		Booking b=null;
		try
		{
			b=obook.get();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return b;
	}
	
	public Booking getBookingId(int bid)
	{
		return brepo.findById(bid).get();
	}
	
	
		
	public Booking saveBooking(Booking b)
	{
		return brepo.save(b);
	}
	
	public int getTotalPrice(int bid)
	{
		 return brepo.getTotalPrice(bid);
	}
	
	public int changeStatusAfterPayment(int bid)
	{
		return brepo.changeStatusAfterPayment(bid);
	}
	
	
	//ADDED BY ME( MOHSIN NAQVI )
	public List<Booking> getAllBookingForUser(User pid)
	{
		return brepo.getAllBookingForUser(pid);
	}
	
	
	
}
