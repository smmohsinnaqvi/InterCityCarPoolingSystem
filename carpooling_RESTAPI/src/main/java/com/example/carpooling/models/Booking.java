package com.example.carpooling.models;

import org.hibernate.annotations.GeneratorType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "booking")
public class Booking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;

	@Column
	int no_of_seats;
	@Column
	int total_price;
	@Column
	String status;
	
	@JsonIgnoreProperties("booking")
	
	@OneToOne
	@JoinColumn(name = "passenger_id")
	User passenger_id;
	
	@OneToOne
	@JoinColumn(name ="ride_id")
	Ride ride_id;

	public Booking() {
		super();
	}

	public Booking(int id, int no_of_seats, int total_price, String status, User passenger_id, Ride ride_id) {
		super();
		this.id = id;
		this.no_of_seats = no_of_seats;
		this.total_price = total_price;
		this.status = status;
		this.passenger_id = passenger_id;
		this.ride_id = ride_id;
	}

	public Booking(int no_of_seats, int total_price, String status, User passenger_id, Ride ride_id) {
		super();
		this.no_of_seats = no_of_seats;
		this.total_price = total_price;
		this.status = status;
		this.passenger_id = passenger_id;
		this.ride_id = ride_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public User getPassenger_id() {
		return passenger_id;
	}

	public void setPassenger_id(User passenger_id) {
		this.passenger_id = passenger_id;
	}

	public Ride getRide_id() {
		return ride_id;
	}

	public void setRide_id(Ride ride_id) {
		this.ride_id = ride_id;
	}
	
}
