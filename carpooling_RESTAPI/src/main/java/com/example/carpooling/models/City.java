package com.example.carpooling.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name ="city")
public class City 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column 
	private String city;
	
	@JsonIgnoreProperties("cities")
	@ManyToOne
	@JoinColumn(name="sid")
	State states;

	public City() 
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public City(String city, State states) 
	{
		super();
		this.city = city;
		this.states = states;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) 
	{
		this.city = city;
	}

	public State getStates() 
	{
		return states;
	}

	public void setStates(State states) 
	{
		this.states = states;
	}
	
	
	
	
}
