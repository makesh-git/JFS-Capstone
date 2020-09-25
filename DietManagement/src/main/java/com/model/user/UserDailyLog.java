package com.model.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserDailyLog {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lid")
	private int lid;
	private String frm; 
	private String batch;

	private String datee;
	private String breakfast;
	private String lunch;
	private String dinner;
	private String fruits;
	private String workout;

	private String dlog;
	private String dtm;
	
	public UserDailyLog() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserDailyLog(String frm, String datee, String breakfast, String lunch, String dinner, String fruits,
			String workout, String dlog, String dtm , String batch) {
		super();
		this.frm = frm;
		this.datee = datee;
		this.breakfast = breakfast;
		this.lunch = lunch;
		this.dinner = dinner;
		this.fruits = fruits;
		this.workout = workout;
		this.dlog = dlog;
		this.dtm = dtm;
		this.batch = batch;
	}

	public int getLid() {
		return lid;
	}

	public void setLid(int lid) {
		this.lid = lid;
	}

	public String getFrm() {
		return frm;
	}

	public void setFrm(String frm) {
		this.frm = frm;
	}

	public String getDatee() {
		return datee;
	}

	public void setDatee(String datee) {
		this.datee = datee;
	}

	public String getBreakfast() {
		return breakfast;
	}

	public void setBreakfast(String breakfast) {
		this.breakfast = breakfast;
	}

	public String getLunch() {
		return lunch;
	}

	public void setLunch(String lunch) {
		this.lunch = lunch;
	}

	public String getDinner() {
		return dinner;
	}

	public void setDinner(String dinner) {
		this.dinner = dinner;
	}

	public String getFruits() {
		return fruits;
	}

	public void setFruits(String fruits) {
		this.fruits = fruits;
	}

	public String getWorkout() {
		return workout;
	}

	public void setWorkout(String workout) {
		this.workout = workout;
	}

	public String getDlog() {
		return dlog;
	}

	public void setDlog(String dlog) {
		this.dlog = dlog;
	}

	public String getDtm() {
		return dtm;
	}

	public void setDtm(String dtm) {
		this.dtm = dtm;
	}
	

	public String getBatch() {
		return batch;
	}

	public void setBatch(String batch) {
		this.batch = batch;
	}

	@Override
	public String toString() {
		return "UserDailyLog [lid=" + lid + ", frm=" + frm + ", datee=" + datee + ", breakfast=" + breakfast
				+ ", lunch=" + lunch + ", dinner=" + dinner + ", fruits=" + fruits + ", workout=" + workout + ", dlog="
				+ dlog + ", dtm=" + dtm + "]";
	}
	
	

}
