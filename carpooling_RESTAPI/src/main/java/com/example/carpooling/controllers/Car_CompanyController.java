package com.example.carpooling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.Car_Company;
import com.example.carpooling.services.Car_CompanyService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Car_CompanyController 
{
	@Autowired
	Car_CompanyService cmservice;
	
	@GetMapping("/getAllCarCompany")
	public List<Car_Company> getCarCompany()
	{
		return cmservice.getCarCompany();
	}
}
