package com.example.carpooling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.City;
import com.example.carpooling.services.CityService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CityController 
{
	@Autowired
	CityService cservice;
	@GetMapping("/getCities")
	public List<City> getAllCities()
	{
		return cservice.getAllcities();
	}
}
