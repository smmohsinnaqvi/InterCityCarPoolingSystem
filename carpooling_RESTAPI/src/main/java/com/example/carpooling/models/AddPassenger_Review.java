package com.example.carpooling.models;

public class AddPassenger_Review {

	int id,passenger_id,ride_id;
	Double rating;
	String comments;
	
	public AddPassenger_Review() {
		super();
	}

	public AddPassenger_Review(int id, int passenger_id, int ride_id, Double rating, String comments) {
		super();
		this.id = id;
		this.passenger_id = passenger_id;
		this.ride_id = ride_id;
		this.rating = rating;
		this.comments = comments;
	}

	public AddPassenger_Review(int passenger_id, int ride_id, Double rating, String comments) {
		super();
		this.passenger_id = passenger_id;
		this.ride_id = ride_id;
		this.rating = rating;
		this.comments = comments;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPassenger_id() {
		return passenger_id;
	}

	public void setPassenger_id(int passenger_id) {
		this.passenger_id = passenger_id;
	}

	public int getRide_id() {
		return ride_id;
	}

	public void setRide_id(int ride_id) {
		this.ride_id = ride_id;
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
}
