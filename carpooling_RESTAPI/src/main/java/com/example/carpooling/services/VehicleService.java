package com.example.carpooling.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.carpooling.models.Vehicle;
import com.example.carpooling.repositories.VehicleRepository;

@Service
public class VehicleService 
{
	@Autowired
	VehicleRepository vrepo;
	
	public Vehicle saveVehicle(Vehicle v) 
	{
		return vrepo.save(v);
	}
	
	public Vehicle getVehicleId(int id)
	{
		return vrepo.findById(id).get();
	}
}
