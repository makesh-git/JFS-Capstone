package com.repository.user;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.user.UserInbox;

public interface UserInboxRepo extends CrudRepository<UserInbox, Integer>
{
	List<UserInbox> findByType(String type);
	List<UserInbox> findByTo(String type);

}
