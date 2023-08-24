package com.example.carpooling.models;

import java.time.LocalDateTime;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "booking")
public class Booking 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@JsonSerialize(using = LocalDateTimeSerializer.class)
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@Column
	LocalDateTime time;
	
	@Column
	int no_of_seats;
	
	@Column
	int total_price;
	
	@Column(length = 100)
	String status;
	
	@JsonIgnoreProperties("bookings")
	
	@ManyToOne
	@JoinColumn(name = "ride_id")
	Ride rides;
	
	@ManyToOne
	@JoinColumn(name = "passenger_id")
	User users;
	
	@ManyToMany(cascade = {CascadeType.MERGE,CascadeType.PERSIST})
	@JoinTable(name = "payments_bookings",
				joinColumns = @JoinColumn(name="booking_id") ,
				inverseJoinColumns = @JoinColumn(name="payment_id")	
			)
	Set<Payment> payments;

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Booking(LocalDateTime time, int no_of_seats, int total_price, String status, Ride rides,
			Set<Payment> payments) {
		super();
		this.time = time;
		this.no_of_seats = no_of_seats;
		this.total_price = total_price;
		this.status = status;
		this.rides = rides;
		this.payments = payments;
	}
	
	public Booking(int id) {
		super();
		this.id = id;
	}


	public Booking(int id, LocalDateTime time, int no_of_seats, int total_price, String status, Ride rides,
			User users) {
		super();
		this.id = id;
		this.time = time;
		this.no_of_seats = no_of_seats;
		this.total_price = total_price;
		this.status = status;
		this.rides = rides;
		this.users = users;
	}
	
	

	public Booking(LocalDateTime time, int no_of_seats, int total_price, String status, Ride rides, User users) {
		super();
		this.time = time;
		this.no_of_seats = no_of_seats;
		this.total_price = total_price;
		this.status = status;
		this.rides = rides;
		this.users = users;
	}

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public Ride getRides() {
		return rides;
	}

	public void setRides(Ride rides) {
		this.rides = rides;
	}

	public User getUsers() {
		return users;
	}

	public void setUsers(User users) {
		this.users = users;
	}
	
	
}
