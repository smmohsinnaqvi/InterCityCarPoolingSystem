package com.example.carpooling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
