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
@Table(name="passengers_review")
public class Passenger_Review {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column
	Double rating;
	
	@Column(length=100)
	String comments;
	
	@JsonIgnoreProperties("passengers_review")
	
	@OneToOne
	@JoinColumn(name = "passenger_id")
	User passenger_id;
	
	@OneToOne
	@JoinColumn(name = "ride_id")
	Ride ride_id;

	
	public Passenger_Review() {
		super();
	}

	public Passenger_Review(int id, Double rating, String comments, User passenger_id, Ride ride_id) {
		super();
		this.id = id;
		this.rating = rating;
		this.comments = comments;
		this.passenger_id = passenger_id;
		this.ride_id = ride_id;
	}

	public Passenger_Review(Double rating, String comments, User passenger_id, Ride ride_id) {
		super();
		this.rating = rating;
		this.comments = comments;
		this.passenger_id = passenger_id;
		this.ride_id = ride_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Double getRating() {
		return rating;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public User getPassenger_id() {
		return passenger_id;
	}

	public void setPassenger_id(User passenger_id) {
		this.passenger_id = passenger_id;
	}

	public Ride getRide_id() {
		return ride_id;
	}

	public void setRide_id(Ride ride_id) {
		this.ride_id = ride_id;
	}
	
	
	

}
