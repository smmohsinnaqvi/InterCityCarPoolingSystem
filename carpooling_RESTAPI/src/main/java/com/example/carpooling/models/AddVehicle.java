package com.example.carpooling.models;

public class AddVehicle 
{
	int id;
	int carmodelid;
	int userid;
	int year;
	String color;
	String rc_book;
	
	public AddVehicle() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public AddVehicle(int carmodelid, int userid, int year, String color, String rc_book) {
		super();
		this.carmodelid = carmodelid;
		this.userid = userid;
		this.year = year;
		this.color = color;
		this.rc_book = rc_book;
	}
	
	public AddVehicle(int id, int carmodelid, int userid, int year, String color, String rc_book) {
		super();
		this.id = id;
		this.carmodelid = carmodelid;
		this.userid = userid;
		this.year = year;
		this.color = color;
		this.rc_book = rc_book;
	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCarmodelid() {
		return carmodelid;
	}
	public void setCarmodelid(int carmodelid) {
		this.carmodelid = carmodelid;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getRc_book() {
		return rc_book;
	}
	public void setRc_book(String rc_book) {
		this.rc_book = rc_book;
	}
	
	
}
