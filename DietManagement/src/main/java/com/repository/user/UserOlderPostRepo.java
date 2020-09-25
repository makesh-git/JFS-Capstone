package com.repository.user;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.user.UserOlderPost;

public interface UserOlderPostRepo  extends CrudRepository<UserOlderPost, Integer>
{
List<UserOlderPost> findByFrm(String id);
}
