package com.example.carpooling.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carpooling.models.City;
import com.example.carpooling.models.State;
import com.example.carpooling.repositories.CityRepository;


@Service
public class CityService 
{
	@Autowired
	CityRepository crepo;
	
	public List<City> getAllcities()
	{
		return crepo.findAll();
	}
	
	public City getCity(int cityid)
	{
		Optional<City> ocity=crepo.findById(cityid);
		City c=null;
		try
		{
			c=ocity.get();
		}
		catch (Exception e) 
		{
			// TODO: handle exception
			e.printStackTrace();
		}
		return c;
	}
	
	public List<City> getCities(int stateid)
	{
		return crepo.getCityFromState(stateid);
	}
}
