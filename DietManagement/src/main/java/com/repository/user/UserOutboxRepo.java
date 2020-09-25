package com.repository.user;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.user.UserOutbox;

public interface UserOutboxRepo extends CrudRepository<UserOutbox, Integer>
{
	List<UserOutbox> findByFrm(String id);

}
