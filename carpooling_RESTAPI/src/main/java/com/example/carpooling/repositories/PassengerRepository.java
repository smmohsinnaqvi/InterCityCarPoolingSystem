package com.example.carpooling.repositories;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.carpooling.models.*;

@Repository
public interface PassengerRepository extends JpaRepository<Passenger, Integer> {

	@Query("select u from User u where user_id= :user_id")
	public List<Passenger> getPassenger(int user_id);
	
}
