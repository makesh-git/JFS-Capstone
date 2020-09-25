package com.model.common;

import java.util.List;

public class assignMoti 
{
	private String batch;
	private List<Motivator> moti;
	
	
	public assignMoti() {
		super();
		// TODO Auto-generated constructor stub
	}


	public assignMoti(String batch, List<Motivator> moti) {
		super();
		this.batch = batch;
		this.moti = moti;
	}


	public String getBatch() {
		return batch;
	}


	public void setBatch(String batch) {
		this.batch = batch;
	}


	public List<Motivator> getMoti() {
		return moti;
	}


	public void setMoti(List<Motivator> moti) {
		this.moti = moti;
	}


	@Override
	public String toString() {
		return "assignMoti [batch=" + batch + ", moti=" + moti + "]";
	}
	
	

}
