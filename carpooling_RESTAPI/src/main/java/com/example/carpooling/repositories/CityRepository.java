package com.example.carpooling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.City;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> 
{

}
