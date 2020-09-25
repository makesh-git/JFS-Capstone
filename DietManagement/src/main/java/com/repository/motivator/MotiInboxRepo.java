package com.repository.motivator;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.motivator.MotiInbox;

public interface MotiInboxRepo extends CrudRepository<MotiInbox, Integer>
{

	List<MotiInbox> findByType(String type);
	List<MotiInbox> findByTo(String id);
}
