package com.example.carpooling.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carpooling.models.State;
import com.example.carpooling.repositories.StateRepository;

@Service
public class StateService 
{
	@Autowired
	StateRepository srepo;
	
	public List<State> getStates()
	{
		return srepo.findAll();
	}
}
