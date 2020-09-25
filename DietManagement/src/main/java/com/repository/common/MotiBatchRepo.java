package com.repository.common;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.common.MotiBatch;

public interface MotiBatchRepo extends CrudRepository<MotiBatch, Integer>
{
	List<MotiBatch> findByMotiid(String id);
	List<MotiBatch> findByBatch(String batch);
	
	List<MotiBatch> findByMotiidAndBatch(String moti, String batch);
	
	List<MotiBatch> findByBatchIgnoreCase(String name);
	
	
}
