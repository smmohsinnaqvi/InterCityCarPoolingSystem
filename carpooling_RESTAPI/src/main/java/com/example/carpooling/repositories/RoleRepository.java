package com.example.carpooling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> 
{
	
}
