package com.repository.common;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.model.common.FileUpload;

public interface FileUploadRepo  extends CrudRepository<FileUpload, Integer>
{
	List<FileUpload> findByFilename(String name);
}
