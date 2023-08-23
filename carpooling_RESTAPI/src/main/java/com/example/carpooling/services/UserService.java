package com.example.carpooling.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carpooling.models.Login;
import com.example.carpooling.models.Passenger;
import com.example.carpooling.models.User;
import com.example.carpooling.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository urepo;
	
	public User getUser(Login l)
	{
		return urepo.getUser(l);
	}
	
	public User saveUser(User u)
	{
		return urepo.save(u);
	}
	
	public User getPassenger(Passenger p)
	{
		return urepo.save(p);
	}

	public User getUser(int id) {
		
		return urepo.findById(id).get();
	}	
	
}
