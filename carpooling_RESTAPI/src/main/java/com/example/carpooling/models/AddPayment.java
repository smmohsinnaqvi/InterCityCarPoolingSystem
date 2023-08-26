package com.example.carpooling.models;

import java.time.LocalDateTime;
import java.util.Set;

public class AddPayment 
{
	int id;
	int user_id;
	int booking_id;
	int amount;
	LocalDateTime date_time;
	String payment_method,status;
	public AddPayment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AddPayment(int id, int user_id, int booking_id, int amount, LocalDateTime date_time, String payment_method,
			String status) {
		super();
		this.id = id;
		this.user_id = user_id;
		this.booking_id = booking_id;
		this.amount = amount;
		this.date_time = date_time;
		this.payment_method = payment_method;
		this.status = status;
	}
	public AddPayment(int user_id, int booking_id, int amount, LocalDateTime date_time, String payment_method,
			String status) {
		super();
		this.user_id = user_id;
		this.booking_id = booking_id;
		this.amount = amount;
		this.date_time = date_time;
		this.payment_method = payment_method;
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public LocalDateTime getDate_time() {
		return date_time;
	}
	public void setDate_time(LocalDateTime date_time) {
		this.date_time = date_time;
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
	
	
}
