package com.example.carpooling.models;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	@Column(length=100)
	String password;
	@Column(length=100)
	String fname;
	@Column(length=100)
	String lname;
	@Column(length=45)
	String gender;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	Date dob;
	
	@Column(length=45)
	String aadhar;
	
	@Column(length=45)
	String licence;
	
	@Column(length=45)
	String phone_no;
	
	@Column(length=100)
	String primary_email;
	
	@Column(length=100)
	String secondary_email;
	
	@OneToOne
	@JoinColumn(name="user_id")
	Login user_id;

	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public User(String fname, String lname, String gender, Date dob, String aadhar, String licence, String phone_no,
			String primary_email, String secondary_email, Login user_id) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
		this.dob = dob;
		this.aadhar = aadhar;
		this.licence = licence;
		this.phone_no = phone_no;
		this.primary_email = primary_email;
		this.secondary_email = secondary_email;
		this.user_id = user_id;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getAadhar() {
		return aadhar;
	}

	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}

	public String getLicence() {
		return licence;
	}

	public void setLicence(String licence) {
		this.licence = licence;
	}

	public String getPhone_no() {
		return phone_no;
	}

	public void setPhone_no(String phone_no) {
		this.phone_no = phone_no;
	}

	public String getPrimary_email() {
		return primary_email;
	}

	public void setPrimary_email(String primary_email) {
		this.primary_email = primary_email;
	}

	public String getSecondary_email() {
		return secondary_email;
	}

	public void setSecondary_email(String secondary_email) {
		this.secondary_email = secondary_email;
	}

	public Login getUser_id() {
		return user_id;
	}

	public void setUser_id(Login user_id) {
		this.user_id = user_id;
	}
	
	
	
}
