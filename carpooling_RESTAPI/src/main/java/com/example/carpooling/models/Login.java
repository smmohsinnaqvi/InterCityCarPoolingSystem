package com.example.carpooling.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
@Table(name="login")
public class Login {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
//	@Column
//	private int roll_id;
	@Column
	private String login_id;
	@Column
	private String password;
	
	
	@ManyToOne
	@JoinColumn(name="roll_id")
	Role roll_id;
	
	boolean status;

	
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public Login(String login_id, String password, Role roll_id, boolean status) {
		super();
		this.login_id = login_id;
		this.password = password;
		this.roll_id = roll_id;
		this.status = status;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLogin_id() {
		return login_id;
	}

	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRoll_id() {
		return roll_id;
	}

	public void setRoll_id(Role roll_id) {
		this.roll_id = roll_id;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	
	
	
	
}
