package com.example.carpooling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.Car_Company;

@Repository
public interface Car_CompanyRepository extends JpaRepository<Car_Company, Integer> {

}
