package com.example.carpooling.models;



import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="role")
public class Role 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column
	String role;
	
	@JsonIgnoreProperties("role")
	@OneToMany(mappedBy = "role",cascade = CascadeType.ALL )
	Set<User> user;

	
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Role(int id, String role, Set<User> user) 
	{
		super();
		this.id = id;
		this.role = role;
		this.user = user;
	}

	public Role(String role, Set<User> user) {
		super();
		this.role = role;
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Set<User> getUser() {
		return user;
	}

	public void setUser(Set<User> user) {
		for(User u:user)
			u.setRole(this);
		this.user=user;
	}
	
	
	
	
}
