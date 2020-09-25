package com.repository.common;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.common.Batches;

public interface BatchRepo extends CrudRepository<Batches, Integer>
{
	//	List<Batches> findByBatch_name(String name);
//	Batches findByBatchname(String name);
	List<Batches> findByBatchname(String name);
	List<Batches> findByBatchnameIgnoreCase(String name);
}
