package com.repository.user;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.user.UserViewPost;

public interface UserViewPostRepo extends CrudRepository<UserViewPost, Integer>
{
	List<UserViewPost> findByAud(String aud);
}
