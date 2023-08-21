package com.example.carpooling.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "car_models")
public class Car_Model 
{
	@Id
	int id;
	
}
