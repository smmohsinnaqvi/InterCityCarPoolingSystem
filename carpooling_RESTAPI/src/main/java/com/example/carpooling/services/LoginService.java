package com.example.carpooling.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carpooling.models.Login;
import com.example.carpooling.repositories.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository lrepo;
	
	public Login getLogin(String login_id,String password)
	{
		Login l;
		Optional<Login> ol=lrepo.getLogin(login_id, password);
		try
		{
			l=ol.get();
		}
		catch(Exception e)
		{
			l=null;
		}
		return l;
	}
	
	public Login getById(int login_id)
	{
		return lrepo.findById(login_id).get();
	}
}
