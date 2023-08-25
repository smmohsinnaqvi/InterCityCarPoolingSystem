package com.example.carpooling.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

public class ExtraPassenger 
{

	int user_id;
	String aadhar_no,phone_no,email,fname,lname,gender;
	
	
	public ExtraPassenger() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public ExtraPassenger(int user_id) {
		super();
		this.user_id = user_id;
	}
	
	public ExtraPassenger(int user_id, String aadhar_no, String phone_no, String email, String fname, String lname,
			String gender) {
		super();
		this.user_id = user_id;
		this.aadhar_no = aadhar_no;
		this.phone_no = phone_no;
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
	}
	public ExtraPassenger(String aadhar_no, String phone_no, String email, String fname, String lname, String gender) {
		super();
		this.aadhar_no = aadhar_no;
		this.phone_no = phone_no;
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
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

}
