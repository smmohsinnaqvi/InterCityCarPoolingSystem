package com.example.carpooling.controllers;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.AddRide;
import com.example.carpooling.models.City;
import com.example.carpooling.models.Ride;
import com.example.carpooling.models.Role;
import com.example.carpooling.models.User;
import com.example.carpooling.models.Vehicle;
import com.example.carpooling.services.CityService;
import com.example.carpooling.services.RideService;
import com.example.carpooling.services.UserService;
import com.example.carpooling.services.VehicleService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RideController 
{
	@Autowired
	RideService rservice;
	
	@Autowired
	CityService cservice;
	
	@Autowired
	VehicleService vservice;
	
	@Autowired
	UserService uservice;
	
	@PostMapping("/addRide")
	public Ride save(@RequestBody AddRide addr)
	{
		LocalDateTime time_and_date_of_departure= addr.getTime_and_date_of_departure();
		
		LocalDateTime time_of_arrival=addr.getTime_of_arival();
		
		int price_per_seat=addr.getPrice_per_seat();
		
		int available_seats=addr.getAvailable_seats();
		
		String status=addr.getStatus();
		
		User u=uservice.getUserId(addr.getCarowner_id());
		City start_location=cservice.getCityId(addr.getStart_location());
		City end_location=cservice.getCityId(addr.getEnd_location());
		Vehicle v=vservice.getVehicleId(addr.getVehicle_id());
		
		Ride r=new Ride(time_and_date_of_departure, time_of_arrival, price_per_seat, available_seats, status, u, start_location, end_location, v);
		
		return rservice.saveRide(r);	
	}
	
	@GetMapping("/getallrides")
	public List<Ride> getAll()
	{
		return rservice.getAll();
	}
	
	@GetMapping("/getOneRide")
	public Ride getOneRide(@RequestParam("rideid") int rideid)
	{
		return rservice.getOneRide(rideid);
	}
	
	@GetMapping("/getRide/{rid}")
	public Ride getRide(@PathVariable("rid") int rid)
	{
		return rservice.getOneRide(rid);
	}
	
	@GetMapping("/getRidesBetweenTwoCities")
	public List<Ride> getRidesBetweenCities(@RequestParam("start_location") City start_location,@RequestParam("end_location") City end_location)
	{
		return rservice.getRidesBetweenCitiesRange(start_location, end_location);
	}
}
