package com.example.carpooling.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carpooling.models.Payment;
import com.example.carpooling.repositories.PaymentRepository;

@Service
public class PaymentService 
{
	@Autowired
	PaymentRepository prepo;
	
	public Payment save(Payment p)
	{
		return prepo.save(p);
	}
}
