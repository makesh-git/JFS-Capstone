package com.securityWeb;


import com.model.common.LoginCredentials;

public class CurrentLoggedUser {
	public static LoginCredentials logDetails = null;

	public void setCurrentUser(LoginCredentials c) {
		this.logDetails = c;
	}

	public LoginCredentials getCurrentUser() {
		return this.logDetails;
	}
}
