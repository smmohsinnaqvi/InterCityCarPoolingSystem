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
@Table(name = "car_models")
public class Car_Model 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column(length = 100)
	private String model_name;
	
	@Column(length = 100)
	private String fuel_type;
	
	@Column(length = 100)
	private String model_type;
	
	@JsonIgnoreProperties("carmodels")
	@ManyToOne
	@JoinColumn(name = "Company_id")
	Car_Company carcompany;

	public Car_Model() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Car_Model(int id, String model_name, String fuel_type, String model_type, Car_Company carcompany) {
		super();
		this.id = id;
		this.model_name = model_name;
		this.fuel_type = fuel_type;
		this.model_type = model_type;
		this.carcompany = carcompany;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getModel_name() {
		return model_name;
	}

	public void setModel_name(String model_name) {
		this.model_name = model_name;
	}

	public String getFuel_type() {
		return fuel_type;
	}

	public void setFuel_type(String fuel_type) {
		this.fuel_type = fuel_type;
	}

	public String getModel_type() {
		return model_type;
	}

	public void setModel_type(String model_type) {
		this.model_type = model_type;
	}

	public Car_Company getCarcompany() {
		return carcompany;
	}

	public void setCarcompany(Car_Company carcompany) {
		this.carcompany = carcompany;
	}
	
	
	
	
}
