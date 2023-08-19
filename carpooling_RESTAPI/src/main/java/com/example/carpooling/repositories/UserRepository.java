package com.example.carpooling.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.carpooling.models.User;


@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Integer> {
	
//	@Query("select e from User e where e.login_id = :loginid and e.password = :password")
//	public List<User> logincheck(String loginid, String password);
	
	@Query("select l from User l where l.login_id=:login_id and l.password=:password")
	public Optional<User> getLogin(String login_id,String password);

}
