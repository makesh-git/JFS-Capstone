package com.model.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserOlderPost {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String frm;
	private String to;
	private String post;
	private String dtm;
	public UserOlderPost() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserOlderPost(String frm, String to, String post, String dtm) {
		super();
		this.frm = frm;
		this.to = to;
		this.post = post;
		this.dtm = dtm;
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
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public String getPost() {
		return post;
	}
	public void setPost(String post) {
		this.post = post;
	}
	public String getDtm() {
		return dtm;
	}
	public void setDtm(String dtm) {
		this.dtm = dtm;
	}
	@Override
	public String toString() {
		return "UserOlderPost [id=" + id + ", frm=" + frm + ", to=" + to + ", post=" + post + ", dtm=" + dtm + "]";
	}
	
	
	
}
