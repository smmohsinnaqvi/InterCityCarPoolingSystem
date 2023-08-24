package com.example.carpooling.models;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "rides")
public class Ride 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@JsonSerialize(using = LocalDateTimeSerializer.class)
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@Column
	LocalDateTime time_and_date_of_departure;
	
	@JsonSerialize(using = LocalDateTimeSerializer.class)
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@Column
	LocalDateTime time_of_arival;
	
	@Column 
	int price_per_seat;
	
	@Column
	int Available_seats;
	
	@Column(length = 100)
	String status;
	
	@JsonIgnoreProperties("rides")
	
	@OneToOne
	@JoinColumn(name = "carowner_id")
	User users;
	
	@OneToOne 
	@JoinColumn(name = "start_location")
	City cities;
	
	@OneToOne
	@JoinColumn(name = "End_location")
	City cities1;
	
	@OneToOne
	@JoinColumn(name = "vehicle_id")
	Vehicle vehicles;

	public Ride() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ride(LocalDateTime time_and_date_of_departure, LocalDateTime time_of_arival, int price_per_seat, int available_seats,
			String status, User users, City cities, City cities1, Vehicle vehicles) {
		super();
		this.time_and_date_of_departure = time_and_date_of_departure;
		this.time_of_arival = time_of_arival;
		this.price_per_seat = price_per_seat;
		Available_seats = available_seats;
		this.status = status;
		this.users = users;
		this.cities = cities;
		this.cities1 = cities1;
		this.vehicles = vehicles;
	}

	public Ride(int id, LocalDateTime time_and_date_of_departure, LocalDateTime time_of_arival, int price_per_seat, int available_seats,
			String status, User users, City cities, City cities1, Vehicle vehicles) {
		super();
		this.id = id;
		this.time_and_date_of_departure = time_and_date_of_departure;
		this.time_of_arival = time_of_arival;
		this.price_per_seat = price_per_seat;
		Available_seats = available_seats;
		this.status = status;
		this.users = users;
		this.cities = cities;
		this.cities1 = cities1;
		this.vehicles = vehicles;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDateTime getTime_and_date_of_departure() {
		return time_and_date_of_departure;
	}

	public void setTime_and_date_of_departure(LocalDateTime time_and_date_of_departure) {
		this.time_and_date_of_departure = time_and_date_of_departure;
	}

	public LocalDateTime getTime_of_arival() {
		return time_of_arival;
	}

	public void setTime_of_arrival(LocalDateTime time_of_arival) {
		this.time_of_arival = time_of_arival;
	}

	public int getPrice_per_seat() {
		return price_per_seat;
	}

	public void setPrice_per_seat(int price_per_seat) {
		this.price_per_seat = price_per_seat;
	}

	public int getAvailable_seats() {
		return Available_seats;
	}

	public void setAvailable_seats(int available_seats) {
		Available_seats = available_seats;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public User getUsers() {
		return users;
	}

	public void setUsers(User users) {
		this.users = users;
	}

	public City getCities() {
		return cities;
	}

	public void setCities(City cities) {
		this.cities = cities;
	}

	public City getCities1() {
		return cities1;
	}

	public void setCities1(City cities1) {
		this.cities1 = cities1;
	}

	public Vehicle getVehicles() {
		return vehicles;
	}

	public void setVehicles(Vehicle vehicles) {
		this.vehicles = vehicles;
	}
	
	
	
	
}
