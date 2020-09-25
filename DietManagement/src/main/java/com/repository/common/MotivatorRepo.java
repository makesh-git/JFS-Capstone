package com.repository.common;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.common.Motivator;

public interface MotivatorRepo extends CrudRepository<Motivator, String>
{
	List<Motivator> findByMotiidIgnoreCase(String id);
	List<Motivator> findByNameIgnoreCase(String name);

}
