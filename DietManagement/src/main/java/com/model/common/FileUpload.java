package com.model.common;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class FileUpload {

	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gid;
	private String filename;
	private String filetype;
	@Lob
	private byte[] data;
	public FileUpload() {
		super();
		// TODO Auto-generated constructor stub
	}
	public FileUpload(String filename, String filetype, byte[] data) {
		super();
		this.filename = filename;
		this.filetype = filetype;
		this.data = data;
	}
	
	
	public int getGid() {
		return gid;
	}
	public void setGid(int gid) {
		this.gid = gid;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getFiletype() {
		return filetype;
	}
	public void setFiletype(String filetype) {
		this.filetype = filetype;
	}
	public byte[] getData() {
		return data;
	}
	public void setData(byte[] data) {
		this.data = data;
	}
	@Override
	public String toString() {
		return "FileUpload [filename=" + filename + ", filetype=" + filetype + ", data=" + Arrays.toString(data) + "]";
	}
	
}
