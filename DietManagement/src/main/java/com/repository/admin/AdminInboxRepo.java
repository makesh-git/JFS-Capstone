package com.repository.admin;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.admin.AdminInbox;

public interface AdminInboxRepo extends CrudRepository<AdminInbox, Integer> 
{
	List<AdminInbox> findByType(String type);
}
