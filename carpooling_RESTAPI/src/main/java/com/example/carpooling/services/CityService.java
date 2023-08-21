package com.example.carpooling.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carpooling.models.City;
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
}
