package com.example.carpooling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.Car_Model;

@Repository
public interface Car_ModelRepository extends JpaRepository<Car_Model, Integer> 
{

}
