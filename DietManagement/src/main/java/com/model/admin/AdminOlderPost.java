package com.model.admin;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AdminOlderPost {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String frm;
	private String to;
	private String post;
	private String dtm;
	public AdminOlderPost() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AdminOlderPost(String to, String post, String dtm, String frm) {
		super();
		this.to = to;
		this.post = post;
		this.dtm = dtm;
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
	
	
	public String getFrm() {
		return frm;
	}
	public void setFrm(String frm) {
		this.frm = frm;
	}
	@Override
	public String toString() {
		return "AdminOlderPost [id=" + id + ", to=" + to + ", post=" + post + ", dtm=" + dtm + "]";
	}
	
	

}
