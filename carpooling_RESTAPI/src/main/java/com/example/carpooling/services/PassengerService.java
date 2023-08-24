package com.example.carpooling.services;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carpooling.models.ExtraPassenger;
import com.example.carpooling.models.Login;
import com.example.carpooling.models.Passenger;
import com.example.carpooling.models.User;
import com.example.carpooling.repositories.PassengerRepository;


@Service
public class PassengerService {
	
	@Autowired
	PassengerRepository prepo;
	
	
	public Passenger savePassenger(Passenger passenger)
	{
		return prepo.save(passenger);
	}

	public List<Passenger> getPassenger()
	{
		return prepo.findAll();
	}
	
}
