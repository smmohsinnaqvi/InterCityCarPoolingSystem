package com.example.carpooling.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.Car_Company;
import com.example.carpooling.models.Car_Model;

@Repository
public interface Car_ModelRepository extends JpaRepository<Car_Model, Integer> 
{
	@Query("select cm from Car_Model cm where carcompany=:company_id")
	public List<Car_Model> getCarModelByComapnyId(Car_Company company_id);
}
