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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "payment")
public class Payment 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column
	int amount;
	
	@JsonSerialize(using = LocalDateTimeSerializer.class)
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@Column
	LocalDateTime Date_time;
	
	@Column(length = 45)
	String payment_method;
	
	@Column(length = 100)
	String status;
	
	@JsonIgnoreProperties("payments")
	
	@ManyToOne
	@JoinColumn(name = "passenger_id")
	User users;
	
	@ManyToOne
	@JoinColumn(name = "booking_id")
	Booking bookings;

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(int id, int amount, LocalDateTime date_time, String payment_method, String status, User users,
			Booking bookings) {
		super();
		this.id = id;
		this.amount = amount;
		Date_time = date_time;
		this.payment_method = payment_method;
		this.status = status;
		this.users = users;
		this.bookings = bookings;
	}

	public Payment(int amount, LocalDateTime date_time, String payment_method, String status, User users,
			Booking bookings) {
		super();
		this.amount = amount;
		Date_time = date_time;
		this.payment_method = payment_method;
		this.status = status;
		this.users = users;
		this.bookings = bookings;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public LocalDateTime getDate_time() {
		return Date_time;
	}

	public void setDate_time(LocalDateTime date_time) {
		Date_time = date_time;
	}

	public String getPayment_method() {
		return payment_method;
	}

	public void setPayment_method(String payment_method) {
		this.payment_method = payment_method;
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

	public Booking getBookings() {
		return bookings;
	}

	public void setBookings(Booking bookings) {
		this.bookings = bookings;
	}
	
}
