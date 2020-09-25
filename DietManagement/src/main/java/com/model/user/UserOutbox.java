package com.model.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserOutbox
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String frm;
	private String to;
	private String mesg;
	private String dtm;
	private String type;
	public UserOutbox() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserOutbox(String to, String mesg, String dtm, String type,String frm) {
		super();
		this.to = to;
		this.mesg = mesg;
		this.dtm = dtm;
		this.type = type;
		this.frm = frm;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
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
	
	
	public String getFrm() {
		return frm;
	}
	public void setFrm(String frm) {
		this.frm = frm;
	}
	@Override
	public String toString() {
		return "UserOutbox [id=" + id + ", to=" + to + ", mesg=" + mesg + ", dtm=" + dtm + ", type=" + type + "]";
	}
	
	
	

}
