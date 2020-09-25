package com.repository.admin;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.admin.Users;
import com.model.common.Batches;
import com.model.common.Groups;

public interface UsersRepo extends CrudRepository<Users, String>
{
	List<Users> findByNameIgnoreCase(String name);
	List<Users> findByUseridIgnoreCase(String name);
	
	List<Users> findByBatch(Batches b);
	List<Users> findBygroup(Groups g);
}
