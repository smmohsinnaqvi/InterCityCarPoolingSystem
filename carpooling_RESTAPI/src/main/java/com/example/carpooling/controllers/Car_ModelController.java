package com.example.carpooling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.Car_Model;
import com.example.carpooling.services.Car_ModelService;

@RestController
public class Car_ModelController 
{

	@Autowired
	Car_ModelService cmodelservice;
	
	@GetMapping("/getAllCarModels")
	public List<Car_Model> getAllCarModels()
	{
		return cmodelservice.getAllCarModels();
	}
}
