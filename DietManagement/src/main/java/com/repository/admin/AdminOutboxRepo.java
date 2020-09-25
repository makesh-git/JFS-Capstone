package com.repository.admin;

import org.springframework.data.repository.CrudRepository;

import com.model.admin.AdminOutbox;

public interface AdminOutboxRepo extends CrudRepository<AdminOutbox, Integer>
{

}
