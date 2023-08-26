package com.example.carpooling.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.Booking;

import jakarta.transaction.Transactional;
@Transactional
@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer>
{
	@Modifying
//	@Query("update Booking b set b.total_price= b.rides.price_per_seat * b.no_of_seats where b.id= ?1 ")
	@Query(value = "UPDATE booking b " +
            "JOIN rides r ON b.ride_id = r.id " +
            "SET b.total_price = b.no_of_seats * r.price_per_seat where b.id= ?1", nativeQuery = true)
	public int getTotalPrice(int bid);
}
