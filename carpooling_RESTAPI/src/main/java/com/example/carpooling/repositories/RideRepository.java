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

	@Query("select r from Ride r where r.cities=:city1 and r.cities1=:city2")
	public List<Ride> getAllRidesFromOneCityToAnotherCity(City city1,City city2);
}
