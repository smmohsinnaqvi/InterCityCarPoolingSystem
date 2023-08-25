package com.example.carpooling.models;

import java.sql.Date;
import java.sql.Time;
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
	
//	@JsonSerialize(using = LocalDateTimeSerializer.class)
//	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
//	@Column
//	LocalDateTime time_and_date_of_departure;
//	
//	@JsonSerialize(using = LocalDateTimeSerializer.class)
//	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
//	@Column
//	LocalDateTime time_of_arival;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	Date date_of_journey;
	
	@JsonFormat(pattern = "HH:mm:ss")
	@Column
	Time time_of_departure;
	
	@JsonFormat(pattern = "HH:mm:ss")
	@Column
	Time time_of_arival;
	
	
	
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
	City start_location;
	
	@OneToOne
	@JoinColumn(name = "End_location")
	City end_location;
	
	@OneToOne
	@JoinColumn(name = "vehicle_id")
	Vehicle vehicles;

	public Ride() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ride(Date date_of_journey, Time time_of_departure, Time time_of_arival, int price_per_seat,
			int available_seats, String status, User users, City start_location, City end_location, Vehicle vehicles) {
		super();
		this.date_of_journey = date_of_journey;
		this.time_of_departure = time_of_departure;
		this.time_of_arival = time_of_arival;
		this.price_per_seat = price_per_seat;
		Available_seats = available_seats;
		this.status = status;
		this.users = users;
		this.start_location = start_location;
		this.end_location = end_location;
		this.vehicles = vehicles;
	}

	public Ride(int id, Date date_of_journey, Time time_of_departure, Time time_of_arival, int price_per_seat,
			int available_seats, String status, User users, City start_location, City end_location, Vehicle vehicles) {
		super();
		this.id = id;
		this.date_of_journey = date_of_journey;
		this.time_of_departure = time_of_departure;
		this.time_of_arival = time_of_arival;
		this.price_per_seat = price_per_seat;
		Available_seats = available_seats;
		this.status = status;
		this.users = users;
		this.start_location = start_location;
		this.end_location = end_location;
		this.vehicles = vehicles;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDate_of_journey() {
		return date_of_journey;
	}

	public void setDate_of_journey(Date date_of_journey) {
		this.date_of_journey = date_of_journey;
	}

	public Time getTime_of_departure() {
		return time_of_departure;
	}

	public void setTime_of_departure(Time time_of_departure) {
		this.time_of_departure = time_of_departure;
	}

	public Time getTime_of_arival() {
		return time_of_arival;
	}

	public void setTime_of_arival(Time time_of_arival) {
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

	public City getStart_location() {
		return start_location;
	}

	public void setStart_location(City start_location) {
		this.start_location = start_location;
	}

	public City getEnd_location() {
		return end_location;
	}

	public void setEnd_location(City end_location) {
		this.end_location = end_location;
	}

	public Vehicle getVehicles() {
		return vehicles;
	}

	public void setVehicles(Vehicle vehicles) {
		this.vehicles = vehicles;
	}

	
	

	
	
	
}
