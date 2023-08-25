package com.example.carpooling.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carpooling.models.Car_Company;
import com.example.carpooling.repositories.Car_CompanyRepository;

@Service
public class Car_CompanyService 
{
	@Autowired
	Car_CompanyRepository cmrepo;
	
	public List<Car_Company> getCarCompany()
	{
		return cmrepo.findAll();
	}
}
