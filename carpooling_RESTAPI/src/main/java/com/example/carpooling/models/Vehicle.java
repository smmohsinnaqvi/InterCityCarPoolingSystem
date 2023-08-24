package com.example.carpooling.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "vehicles")
public class Vehicle 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	@Column
	int year;
	
	@Column(length = 45)
	String color;
	
	@Column(length = 200)
	String rc_book;
	
	@JsonIgnoreProperties("vehicles")
	
	@OneToOne
	@JoinColumn(name = "model_id")
	Car_Model carmodels;
	
	
	@ManyToOne
	@JoinColumn(name = "carowner_id")
	User users;

	public Vehicle() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vehicle(int year, String color, String rc_book, Car_Model carmodels, User users) {
		super();
		this.year = year;
		this.color = color;
		this.rc_book = rc_book;
		this.carmodels = carmodels;
		this.users = users;
	}

	public Vehicle(int id, int year, String color, String rc_book, Car_Model carmodels, User users) {
		super();
		this.id = id;
		this.year = year;
		this.color = color;
		this.rc_book = rc_book;
		this.carmodels = carmodels;
		this.users = users;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getRc_book() {
		return rc_book;
	}

	public void setRc_book(String rc_book) {
		this.rc_book = rc_book;
	}

	public Car_Model getCarmodels() {
		return carmodels;
	}

	public void setCarmodels(Car_Model carmodels) {
		this.carmodels = carmodels;
	}

	public User getUsers() {
		return users;
	}

	public void setUsers(User users) {
		this.users = users;
	}
	
	
	
}
