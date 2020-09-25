package com.service;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateAndTimeFinder {

	
	public String getCurrentDateAndTime() {
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		Date date = new Date();
		return formatter.format(date);
	}

}
