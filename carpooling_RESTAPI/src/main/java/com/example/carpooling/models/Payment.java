package com.example.carpooling.models;

import org.hibernate.grammars.hql.HqlParser.DateTimeContext;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="payment")
public class Payment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column
	int amount;
	
	DateTimeContext Date_time;
	@Column(length=100)
	String payment_method;
	@Column(length=100)
	String status;
	
	@OneToOne
	@JoinColumn(name ="booking_id")
	Booking booking_id;
	
	@OneToOne
	@JoinColumn(name ="passenger_id")
	User passenger_id;

	public Payment() {
		super();
	}
	

	public Payment(int id, int amount, DateTimeContext date_time, String payment_method, String status,
			Booking booking_id, User passenger_id) {
		super();
		this.id = id;
		this.amount = amount;
		Date_time = date_time;
		this.payment_method = payment_method;
		this.status = status;
		this.booking_id = booking_id;
		this.passenger_id = passenger_id;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public DateTimeContext getDate_time() {
		return Date_time;
	}

	public void setDate_time(DateTimeContext date_time) {
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

	public Booking getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(Booking booking_id) {
		this.booking_id = booking_id;
	}

	public User getPassenger_id() {
		return passenger_id;
	}

	public void setPassenger_id(User passenger_id) {
		this.passenger_id = passenger_id;
	}
	
	
}
