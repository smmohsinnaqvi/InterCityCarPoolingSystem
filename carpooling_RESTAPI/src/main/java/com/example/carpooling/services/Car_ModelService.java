package com.example.carpooling.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carpooling.models.Car_Company;
import com.example.carpooling.models.Car_Model;
import com.example.carpooling.repositories.Car_ModelRepository;

@Service
public class Car_ModelService 
{
	@Autowired
	Car_ModelRepository cmodelrepo;
	
	public List<Car_Model> getAllCarModels()
	{
		return cmodelrepo.findAll();
	}
	
	public Car_Model getCarModel(int id)
	{
		return cmodelrepo.findById(id).get();
	}
	
	public List<Car_Model> getCarModels(Car_Company comapny_id)
	{
		return cmodelrepo.getCarModelByComapnyId(comapny_id);
	}
}
