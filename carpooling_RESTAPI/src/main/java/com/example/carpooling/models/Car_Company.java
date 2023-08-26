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
@Table(name = "car_company")
public class Car_Company 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column(length=100)
	String company_name;
	
	@JsonIgnoreProperties("carcompany")
	@OneToMany(mappedBy = "carcompany",cascade = CascadeType.ALL)
	Set<Car_Model> carmodels;
	
	

	public Car_Company() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public Car_Company(String company_name, Set<Car_Model> carmodels) {
		super();
		this.company_name = company_name;
		this.carmodels = carmodels;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getCompany_name() {
		return company_name;
	}



	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}



	public Set<Car_Model> getCarmodels() {
		return carmodels;
	}



	public void setCarmodels(Set<Car_Model> carmodels) 
	{
		for(Car_Model cm:carmodels)
			cm.setCarcompany(this);
		this.carmodels = carmodels;
	}

	
	
	
	
	
}
