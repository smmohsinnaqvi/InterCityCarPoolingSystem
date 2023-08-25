package com.example.carpooling.models;

import java.time.LocalDateTime;

public class AddBooking 
{
	int id;
	int passenger_id,ride_id;
	LocalDateTime time;
	int no_of_seats;
	int total_price;
	String status;
	public AddBooking() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AddBooking(int id, int passenger_id, int ride_id, LocalDateTime time, int no_of_seats, int total_price,
			String status) {
		super();
		this.id = id;
		this.passenger_id = passenger_id;
		this.ride_id = ride_id;
		this.time = time;
		this.no_of_seats = no_of_seats;
		this.total_price = total_price;
		this.status = status;
	}
	public AddBooking(int passenger_id, int ride_id, LocalDateTime time, int no_of_seats, int total_price,
			String status) {
		super();
		this.passenger_id = passenger_id;
		this.ride_id = ride_id;
		this.time = time;
		this.no_of_seats = no_of_seats;
		this.total_price = total_price;
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getPassenger_id() {
		return passenger_id;
	}
	public void setPassenger_id(int passenger_id) {
		this.passenger_id = passenger_id;
	}
	public int getRide_id() {
		return ride_id;
	}
	public void setRide_id(int ride_id) {
		this.ride_id = ride_id;
	}
	public LocalDateTime getTime() {
		return time;
	}
	public void setTime(LocalDateTime time) {
		this.time = time;
	}
	public int getNo_of_seats() {
		return no_of_seats;
	}
	public void setNo_of_seats(int no_of_seats) {
		this.no_of_seats = no_of_seats;
	}
	public int getTotal_price() {
		return total_price;
	}
	public void setTotal_price(int total_price) {
		this.total_price = total_price;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
}
