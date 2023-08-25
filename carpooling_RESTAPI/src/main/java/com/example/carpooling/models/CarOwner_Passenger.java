package com.example.carpooling.models;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "carowner_passenger")
public class CarOwner_Passenger 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String password;
	
	@Column
	private String fname;
	
	@Column
	private String lname;
	
	@Column
	private String gender;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	private Date dob;
	
	@Column
	private String aadhar;
	
	@Column
	private String phone_no;
	
	@Column
	private String email;
	
	@Column
	private String secondary_email;
	
		
	
	
	
	
}
