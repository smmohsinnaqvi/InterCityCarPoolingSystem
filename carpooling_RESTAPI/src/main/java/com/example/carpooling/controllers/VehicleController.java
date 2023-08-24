package com.example.carpooling.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.AddVehicle;
import com.example.carpooling.models.Car_Model;
import com.example.carpooling.models.User;
import com.example.carpooling.models.Vehicle;
import com.example.carpooling.services.Car_ModelService;
import com.example.carpooling.services.UserService;
import com.example.carpooling.services.VehicleService;

@RestController
public class VehicleController 
{
	@Autowired
	VehicleService vservice;
	
	@Autowired 
	UserService userviService;
	
	@Autowired
	Car_ModelService cmservice;
	
	@PostMapping("/saveVehicle")
	public Vehicle save(@RequestBody AddVehicle addv)
	{
		Car_Model cm= cmservice.getCarModel(addv.getCarmodelid());
		User u= userviService.getUserId(addv.getUserid());
		int id=addv.getId();
		
		int year=addv.getYear();
		String color=addv.getColor();
		String rc_book=addv.getRc_book();
		
		Vehicle v=new Vehicle(year, color, rc_book, cm, u);
		return vservice.saveVehicle(v);
		//return vservice.saveVehicle(v);
	}
}
