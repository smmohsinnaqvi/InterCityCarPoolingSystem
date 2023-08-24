package com.example.carpooling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.Booking;
import com.example.carpooling.models.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> 
{

}
