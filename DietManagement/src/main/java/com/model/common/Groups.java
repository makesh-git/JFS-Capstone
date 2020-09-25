package com.model.common;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Groups {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gid;
	private String groupname;
	private String groupid;
	private String groupdesc;
	private String strtdate;
	public Groups() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Groups(String groupname, String groupid, String groupdesc, String strtdate) {
		super();
		this.groupname = groupname;
		this.groupid = groupid;
		this.groupdesc = groupdesc;
		this.strtdate = strtdate;
	}
	public int getGid() {
		return gid;
	}
	public void setGid(int gid) {
		this.gid = gid;
	}
	public String getGroupname() {
		return groupname;
	}
	public void setGroupname(String groupname) {
		this.groupname = groupname;
	}
	public String getGroupid() {
		return groupid;
	}
	public void setGroupid(String groupid) {
		this.groupid = groupid;
	}
	public String getGroupdesc() {
		return groupdesc;
	}
	public void setGroupdesc(String groupdesc) {
		this.groupdesc = groupdesc;
	}
	
	public String getStrtdate() {
		return strtdate;
	}
	public void setStrtdate(String strtdate) {
		this.strtdate = strtdate;
	}
	@Override
	public String toString() {
		return "Groups [gid=" + gid + ", groupname=" + groupname + ", groupid=" + groupid + ", groupdesc=" + groupdesc
				+ "]";
	}
	
	
	
	
}
