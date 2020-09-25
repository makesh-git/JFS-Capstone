package com.model.common;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MotiBatch {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mid;
	private String motiid;
	private String batch;
	public MotiBatch() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public MotiBatch(String motiid, String batch) {
		super();
		this.motiid = motiid;
		this.batch = batch;
	}


	@Override
	public String toString() {
		return "MotiBatch [mid=" + mid + ", motiid=" + motiid + ", batch=" + batch + "]";
	}
	public int getMid() {
		return mid;
	}
	public void setMid(int mid) {
		this.mid = mid;
	}
	public String getMotiid() {
		return motiid;
	}
	public void setMotiid(String motiid) {
		this.motiid = motiid;
	}
	public String getBatch() {
		return batch;
	}
	public void setBatch(String batch) {
		this.batch = batch;
	}
	
	
	
}
