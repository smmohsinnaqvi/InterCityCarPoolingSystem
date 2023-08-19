package com.example.carpooling.models;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "state")
public class State 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String state;
	
	@JsonIgnoreProperties("states")
	@OneToMany(mappedBy = "states",cascade = CascadeType.ALL)
	Set<City> cities;

	public State() 
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public State(String state, Set<City> cities) {
		super();
		this.state = state;
		this.cities = cities;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Set<City> getCities() {
		return cities;
	}

	public void setCities(Set<City> cities) 
	{
		for(City c:cities)
			c.setStates(this);
		this.cities = cities;
	}
	
	
	
	
	
	
}
