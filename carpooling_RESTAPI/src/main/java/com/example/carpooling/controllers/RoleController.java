package com.example.carpooling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.carpooling.models.Role;
import com.example.carpooling.services.RoleService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RoleController 
{

	@Autowired
	RoleService rservice;
	
//	@GetMapping("/getallroles")
//	public List<Role> getAllRoles()
//	{
//		return rservice.getRoles();
//	}
}
