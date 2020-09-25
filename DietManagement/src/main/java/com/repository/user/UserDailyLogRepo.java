package com.repository.user;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.user.UserDailyLog;

public interface UserDailyLogRepo  extends CrudRepository<UserDailyLog, Integer>
{
	List<UserDailyLog> findByBatchAndDatee(String b, String ds);
	List<UserDailyLog> findByBatch(String b);
	List<UserDailyLog> findByDatee(String d);
}
