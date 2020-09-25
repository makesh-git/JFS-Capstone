package com.model.common;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class LoginCredentials 
{
	@Id
	private String userid;
	private String password;
	private String type;
	public LoginCredentials() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LoginCredentials(String userid, String password, String type) {
		super();
		this.userid = userid;
		this.password = password;
		this.type = type;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "LoginCredentials [userid=" + userid + ", password=" + password + ", type=" + type + "]";
	}
	
	
	
	

}
