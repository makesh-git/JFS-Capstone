package com.model.common;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class WeeklyDiet
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gid;
	private String fileName;
	private String batch;
	private String tips;
	private String dtm;
	private String by;
	public WeeklyDiet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public WeeklyDiet(String fileName, String batch, String tips, String dtm, String by) {
		super();
		this.fileName = fileName;
		this.batch = batch;
		this.tips = tips;
		this.dtm = dtm;
		this.by = by;
	}
	public int getGid() {
		return gid;
	}
	public void setGid(int gid) {
		this.gid = gid;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getBatch() {
		return batch;
	}
	public void setBatch(String batch) {
		this.batch = batch;
	}
	public String getTips() {
		return tips;
	}
	public void setTips(String tips) {
		this.tips = tips;
	}
	public String getDtm() {
		return dtm;
	}
	public void setDtm(String dtm) {
		this.dtm = dtm;
	}
	public String getBy() {
		return by;
	}
	public void setBy(String by) {
		this.by = by;
	}
	@Override
	public String toString() {
		return "WeeklyDiet [gid=" + gid + ", fileName=" + fileName + ", batch=" + batch + ", tips=" + tips + ", dtm="
				+ dtm + ", by=" + by + "]";
	}
	
	
	
	
	

}
