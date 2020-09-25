package com.repository.common;

import org.springframework.data.repository.CrudRepository;

import com.model.common.LoginCredentials;

public interface LoginCredentialsRepo extends CrudRepository<LoginCredentials, String>
{
	LoginCredentials findByUserid(String userid);
}
