package com.example.carpooling.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.carpooling.models.Login;
import com.example.carpooling.models.Passenger;
import com.example.carpooling.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> 
{
	@Query("select u from User u where user_id=:l")
	public User getUser(Login l);

	public User save(Passenger p);
//	@Query("select u from User u where user_id=:uid")
//	public User getUser(int uid);
}
