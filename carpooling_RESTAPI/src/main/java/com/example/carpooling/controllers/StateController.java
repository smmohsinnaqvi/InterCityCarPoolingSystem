package com.example.carpooling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.State;
import com.example.carpooling.services.StateService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StateController 
{
	@Autowired
	StateService sservice;
	
	@GetMapping("/getStates")
	public List<State> getAllStates()
	{
		return sservice.getStates();
	}
}
