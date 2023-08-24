package com.example.carpooling;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.carpooling.*")

public class CarpoolingApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarpoolingApplication.class, args);
	}

}
