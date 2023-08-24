package com.example.carpooling.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.Login;
import com.example.carpooling.models.Passenger_Review;
import com.example.carpooling.models.User;

@Repository
public interface Passenger_ReviewRepository extends JpaRepository<Passenger_Review, Integer>{

//	s
	
	
}
