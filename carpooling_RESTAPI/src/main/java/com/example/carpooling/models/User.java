package com.example.carpooling.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
//	@Column
//	private int roll_id;
	@Column
	private String login_id;
	@Column
	private String password;
	
	@JsonIgnoreProperties("user")
	@OneToOne
	@JoinColumn(name="roll_id")
	Role role;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int id, String login_id, String password, Role role) {
		super();
		this.id = id;
		this.login_id = login_id;
		this.password = password;
		this.role = role;
	}
	

	public User(String login_id, String password, Role role) {
		super();
		this.login_id = login_id;
		this.password = password;
		this.role = role;
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

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	
	
}
