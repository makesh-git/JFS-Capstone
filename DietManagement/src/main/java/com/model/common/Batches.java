package com.model.common;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Batches {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bid;
	private String batchname;
	private String batchid;
	private String batchdesc;
	private String strtdate;
	
	public Batches() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Batches(String batch_name, String batchid, String batchdesc,String strtdate) {
		super();
		this.batchname = batchname;
		this.batchid = batchid;
		this.batchdesc = batchdesc;
		this.strtdate = strtdate;
	}
	public int getBid() {
		return bid;
	}
	public void setBid(int bid) {
		this.bid = bid;
	}
	public String getBatchname() {
		return batchname;
	}
	public void setBatch_name(String batchname) {
		this.batchname = batchname;
	}
	public String getBatchid() {
		return batchid;
	}
	public void setBatch_id(String batchid) {
		this.batchid = batchid;
	}
	public String getBatchdesc() {
		return batchdesc;
	}
	public void setBatch_desc(String batchdesc) {
		this.batchdesc = batchdesc;
	}
	
	
	
	
	
	public String getStrtdate() {
		return strtdate;
	}
	public void setStrtdate(String strtdate) {
		this.strtdate = strtdate;
	}
	@Override
	public String toString() {
		return "Batch [bid=" + bid + ", batch_name=" + batchname + ", batch_id=" + batchid + ", batch_desc="
				+ batchdesc + "]";
	}
	
	
	
	
	
}
