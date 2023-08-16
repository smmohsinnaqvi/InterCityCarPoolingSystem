package com.example.carpooling.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int uid;
	@Column
	private String email;
	@Column
	private String password;
	@Column
	private String fname;
	@Column
	private String lname;
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}


	public User(int uid, String email, String password, String fname, String lname) {
		super();
		this.uid = uid;
		this.email = email;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
	}
	


	public int getUid() {
		return uid;
	}


	public void setUid(int uid) {
		this.uid = uid;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
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


	@Override
	public String toString() {
		return "User [uid=" + uid + ", email=" + email + ", password=" + password + ", fname=" + fname + ", lname="
				+ lname + "]";
	}
	
	
	
	
	
	

}
