package com.BootLoad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.model.common.Batches;


@SpringBootApplication
@ComponentScan({"com.securityWeb"})
@ComponentScan({"com.controller"})
@EnableJpaRepositories({"com.repository.common","com.repository.admin","com.repository.user","com.repository.motivator"})
@EntityScan({"com.model.common","com.model.admin","com.model.user","com.model.motivator"})
public class DietManagementApplication {

	

	
	public static void main(String[] args) {
		
	
		SpringApplication.run(DietManagementApplication.class, args);
	}
	

    

}
