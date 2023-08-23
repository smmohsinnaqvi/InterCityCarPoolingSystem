package com.example.carpooling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.carpooling.models.State;

@Repository
public interface StateRepository extends JpaRepository<State, Integer> {

}
