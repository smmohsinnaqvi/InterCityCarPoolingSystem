package com.example.carpooling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.Ride;

@Repository
public interface RideRepository extends JpaRepository<Ride, Integer> {

}
