package com.example.carpooling.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carpooling.models.City;
import com.example.carpooling.models.Ride;
import com.example.carpooling.models.Role;
import com.example.carpooling.repositories.RideRepository;

@Service
public class RideService 
{
	@Autowired
	RideRepository rrepo;
	
	public List<Ride> getAll()
	{
		return rrepo.findAll();
	}

	public Ride getOneRide(int rideid)
	{
		Optional<Ride> oride=rrepo.findById(rideid);
		Ride r=null;
		try
		{
			r=oride.get();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return r;
	}
	
	public Ride saveRide(Ride r)
	{
		return rrepo.save(r);
	}
	
	public Ride getRideId(int id)
	{
		return rrepo.findById(id).get();
	}
	
	public List<Ride> getRidesBetweenCitiesRange(City c1,City c2)
	{
		return rrepo.getAllRidesFromOneCityToAnotherCity(c1, c2);
	}
}
