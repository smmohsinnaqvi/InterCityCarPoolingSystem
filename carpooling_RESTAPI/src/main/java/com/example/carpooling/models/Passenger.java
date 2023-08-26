package com.example.carpooling.models;

import java.util.List;

import org.hibernate.annotations.ManyToAny;

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
@Table(name="co_passengers")
public class Passenger
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column(length=45)
	String aadhar_no;
	@Column(length=45)
	String phone_no;
	@Column(length=45)
	String email;
	@Column(length=45)
	String fname;
	@Column(length=45)
	String lname;
	@Column(length=45)
	String gender;
	
	@JsonIgnoreProperties("user_id")
	@ManyToOne
	@JoinColumn(name="passenger_id")
	User user_id;

	
	public Passenger()
	{
		super();
	}


	public Passenger(String aadhar_no, String phone_no, String email, String fname, String lname, String gender,
			User user_id) {
		super();
		this.aadhar_no = aadhar_no;
		this.phone_no = phone_no;
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
		this.user_id = user_id;
	}

	public String getAadhar_no() {
		return aadhar_no;
	}


	public void setAadhar_no(String aadhar_no) {
		this.aadhar_no = aadhar_no;
	}


	public String getPhone_no() {
		return phone_no;
	}


	public void setPhone_no(String phone_no) {
		this.phone_no = phone_no;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getFname() {
		return fname;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public String getLname() {
		return lname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public User getUser_id() {
		return user_id;
	}


	public void setUser_id(User user_id) 
	{
		this.user_id = user_id;
	} 
	
	

}
