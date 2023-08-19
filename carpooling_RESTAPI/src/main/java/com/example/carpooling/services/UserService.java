package com.example.carpooling.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carpooling.models.User;
import com.example.carpooling.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository uro;
	
	public List<User> getUsers()
	{
		return uro.findAll();
	}
	
//	public List<User> logincheck(String loginid, String password)
//	{
//		return uro.logincheck(loginid,password);
//	}
	
	public User save(User u)
	{
		return uro.save(u);
	}
	
	public User  getLogin(String login_id,String password)
	{
		User u;
		Optional<User> ol=uro.getLogin(login_id, password);
		try
		{
			u=ol.get();
			
		}
		catch(Exception e)
		{
			u=null;
		}
		return u;
	}

}
