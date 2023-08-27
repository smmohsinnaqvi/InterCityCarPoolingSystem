package com.example.carpooling.models;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDateTime;

public class AddRide 
{
	int id;
	int carowner_id,start_location,end_location,vehicle_id;
	Date date_of_journey;
	Time time_of_departure,time_of_arival;
	int price_per_seat,Available_seats;
	String status;
	
	
	public AddRide() {
		super();
		// TODO Auto-generated constructor stub
	}


	public AddRide(int id, int carowner_id, int start_location, int end_location, int vehicle_id, Date date_of_journey,
			Time time_of_departure, Time time_of_arival, int price_per_seat, int available_seats, String status) {
		super();
		this.id = id;
		this.carowner_id = carowner_id;
		this.start_location = start_location;
		this.end_location = end_location;
		this.vehicle_id = vehicle_id;
		this.date_of_journey = date_of_journey;
		this.time_of_departure = time_of_departure;
		this.time_of_arival = time_of_arival;
		this.price_per_seat = price_per_seat;
		Available_seats = available_seats;
		this.status = status;
	}


	public AddRide(int carowner_id, int start_location, int end_location, int vehicle_id, Date date_of_journey,
			Time time_of_departure, Time time_of_arival, int price_per_seat, int available_seats, String status) {
		super();
		this.carowner_id = carowner_id;
		this.start_location = start_location;
		this.end_location = end_location;
		this.vehicle_id = vehicle_id;
		this.date_of_journey = date_of_journey;
		this.time_of_departure = time_of_departure;
		this.time_of_arival = time_of_arival;
		this.price_per_seat = price_per_seat;
		Available_seats = available_seats;
		this.status = status;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getCarowner_id() {
		return carowner_id;
	}


	public void setCarowner_id(int carowner_id) {
		this.carowner_id = carowner_id;
	}


	public int getStart_location() {
		return start_location;
	}


	public void setStart_location(int start_location) {
		this.start_location = start_location;
	}


	public int getEnd_location() {
		return end_location;
	}


	public void setEnd_location(int end_location) {
		this.end_location = end_location;
	}


	public int getVehicle_id() {
		return vehicle_id;
	}


	public void setVehicle_id(int vehicle_id) {
		this.vehicle_id = vehicle_id;
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
	
	
	
}
