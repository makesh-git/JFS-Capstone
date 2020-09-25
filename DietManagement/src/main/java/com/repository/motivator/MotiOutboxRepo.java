package com.repository.motivator;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.motivator.MotiOutbox;

public interface MotiOutboxRepo extends CrudRepository<MotiOutbox, Integer>
{

	List<MotiOutbox> findByFrm(String id);
}
