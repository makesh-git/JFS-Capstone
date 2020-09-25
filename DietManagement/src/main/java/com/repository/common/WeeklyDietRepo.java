package com.repository.common;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.common.WeeklyDiet;

public interface WeeklyDietRepo  extends CrudRepository<WeeklyDiet, Integer>
{
	List<WeeklyDiet> findByBatch(String b);
}
