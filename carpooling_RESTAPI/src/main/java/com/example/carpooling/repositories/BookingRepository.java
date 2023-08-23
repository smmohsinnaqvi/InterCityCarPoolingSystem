package com.example.carpooling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer>{

}
