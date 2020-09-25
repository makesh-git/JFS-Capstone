package com.model.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserMonthlyMeas {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "mid")
	private int mid;

	private String userid;
	private String month;

	private String height;
	private String weight;
	private String chest;
	private String waist;
	private String shoulder;
	private String biceps;
	private String forearm;
	private String legs;
	private String thigh;
	private String hip;
	public UserMonthlyMeas() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserMonthlyMeas(String userid, String month, String height, String weight, String chest, String waist,
			String shoulder, String biceps, String forearm, String legs, String thigh, String hip) {
		super();
		this.userid = userid;
		this.month = month;
		this.height = height;
		this.weight = weight;
		this.chest = chest;
		this.waist = waist;
		this.shoulder = shoulder;
		this.biceps = biceps;
		this.forearm = forearm;
		this.legs = legs;
		this.thigh = thigh;
		this.hip = hip;
	}
	public int getMid() {
		return mid;
	}
	public void setMid(int mid) {
		this.mid = mid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getHeight() {
		return height;
	}
	public void setHeight(String height) {
		this.height = height;
	}
	public String getWeight() {
		return weight;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public String getChest() {
		return chest;
	}
	public void setChest(String chest) {
		this.chest = chest;
	}
	public String getWaist() {
		return waist;
	}
	public void setWaist(String waist) {
		this.waist = waist;
	}
	public String getShoulder() {
		return shoulder;
	}
	public void setShoulder(String shoulder) {
		this.shoulder = shoulder;
	}
	public String getBiceps() {
		return biceps;
	}
	public void setBiceps(String biceps) {
		this.biceps = biceps;
	}
	public String getForearm() {
		return forearm;
	}
	public void setForearm(String forearm) {
		this.forearm = forearm;
	}
	public String getLegs() {
		return legs;
	}
	public void setLegs(String legs) {
		this.legs = legs;
	}
	public String getThigh() {
		return thigh;
	}
	public void setThigh(String thigh) {
		this.thigh = thigh;
	}
	public String getHip() {
		return hip;
	}
	public void setHip(String hip) {
		this.hip = hip;
	}
	@Override
	public String toString() {
		return "UserMonthlyMeas [mid=" + mid + ", userid=" + userid + ", month=" + month + ", height=" + height
				+ ", weight=" + weight + ", chest=" + chest + ", waist=" + waist + ", shoulder=" + shoulder
				+ ", biceps=" + biceps + ", forearm=" + forearm + ", legs=" + legs + ", thigh=" + thigh + ", hip=" + hip
				+ "]";
	}
	
	

}
