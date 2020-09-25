package com.repository.motivator;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.motivator.MotiOlderPost;

public interface MotiOlderPostRepo extends CrudRepository<MotiOlderPost, Integer>
{
	List<MotiOlderPost> findByFrm(String  id);
}
