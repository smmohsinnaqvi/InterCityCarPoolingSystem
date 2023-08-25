package com.example.carpooling.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.City;
import com.example.carpooling.models.Ride;

@Repository
public interface RideRepository extends JpaRepository<Ride, Integer> 
{

	@Query("select r from Ride r where r.start_location=:start_location and r.end_location=:end_location")
	public List<Ride> getAllRidesFromOneCityToAnotherCity(City start_location,City end_location);
}