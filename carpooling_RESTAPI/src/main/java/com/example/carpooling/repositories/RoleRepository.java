package com.example.carpooling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.carpooling.models.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> 
{

}
