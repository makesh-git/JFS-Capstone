package com.model.common;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Motivator {

	@Id
	private String motiid;
	private String name;
	private String email;
	private String age;
	private String batches;
	private String pass;
	private String gender;
	private String mobile;
	private String place;

	private String address;
	
	
	
	private String country;
	private String state;
	private String city;
	private String pincode;
	private String height;
	private String weight;
	private String regDate;
	private String refId;

	public Motivator() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Motivator(String motiid, String name, String email, String age, String batches, String pass, String gender,
			String mobile, String place, String address, String country, String state, String city, String pincode,
			String height, String weight, String regDate, String refId) {
		super();
		this.motiid = motiid;
		this.name = name;
		this.email = email;
		this.age = age;
		this.batches = batches;
		this.pass = pass;
		this.gender = gender;
		this.mobile = mobile;
		this.place = place;
		this.address = address;
		this.country = country;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.height = height;
		this.weight = weight;
		this.regDate = regDate;
		this.refId = refId;
	}

	public String getMotiid() {
		return motiid;
	}

	public void setMotiid(String motiid) {
		this.motiid = motiid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getBatches() {
		return batches;
	}

	public void setBatches(String batches) {
		this.batches = batches;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
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

	public String getRegDate() {
		return regDate;
	}

	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}

	public String getRefId() {
		return refId;
	}

	public void setRefId(String refId) {
		this.refId = refId;
	}

	@Override
	public String toString() {
		return "Motivator [motiid=" + motiid + ", name=" + name + ", email=" + email + ", age=" + age + ", batches="
				+ batches + ", pass=" + pass + ", gender=" + gender + ", mobile=" + mobile + ", place=" + place
				+ ", address=" + address + ", country=" + country + ", state=" + state + ", city=" + city + ", pincode="
				+ pincode + ", height=" + height + ", weight=" + weight + ", regDate=" + regDate + ", refId=" + refId
				+ "]";
	}
	
	
	
	
	
	
	
	
	
}
