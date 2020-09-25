package com.repository.user;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.user.UserMonthlyMeas;

public interface UserMonthlyMeasRepo extends CrudRepository<UserMonthlyMeas, Integer>
{
	List<UserMonthlyMeas> findByUserid(String userid);
}
