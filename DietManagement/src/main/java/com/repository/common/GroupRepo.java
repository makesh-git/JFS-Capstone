package com.repository.common;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.common.Groups;

public interface GroupRepo extends CrudRepository<Groups, Integer>
{
	//Groups findByGroup_name(String name);
	List<Groups> findByGroupname(String name);
	List<Groups> findByGroupnameIgnoreCase(String name);

}
