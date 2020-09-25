package com.model.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserInbox {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String to;
	private String frm;
	private String mesg;
	private String dtm;
	private String type;
	
	public UserInbox() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserInbox(String frm, String mesg, String dtm, String type,String to) {
		super();
		this.frm = frm;
		this.mesg = mesg;
		this.dtm = dtm;
		this.type = type;
		this.to = to;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFrm() {
		return frm;
	}
	public void setFrm(String frm) {
		this.frm = frm;
	}
	public String getMesg() {
		return mesg;
	}
	public void setMesg(String mesg) {
		this.mesg = mesg;
	}
	public String getDtm() {
		return dtm;
	}
	public void setDtm(String dtm) {
		this.dtm = dtm;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	@Override
	public String toString() {
		return "UserInbox [id=" + id + ", from=" + frm + ", mesg=" + mesg + ", dtm=" + dtm + ", type=" + type + "]";
	}
	
}
