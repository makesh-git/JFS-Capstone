package com.model.motivator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MotiViewPost
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String frm;
	private String post;
	private String aud;
	private String dtm;
	private String type;
	public MotiViewPost() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MotiViewPost(String frm, String post, String aud, String dtm, String type) {
		super();
		this.frm = frm;
		this.post = post;
		this.aud = aud;
		this.dtm = dtm;
		this.type = type;
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
	public String getPost() {
		return post;
	}
	public void setPost(String post) {
		this.post = post;
	}
	public String getAud() {
		return aud;
	}
	public void setAud(String aud) {
		this.aud = aud;
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
	@Override
	public String toString() {
		return "MotiViewPost [id=" + id + ", frm=" + frm + ", post=" + post + ", aud=" + aud + ", dtm=" + dtm
				+ ", type=" + type + "]";
	}
	
	
}
