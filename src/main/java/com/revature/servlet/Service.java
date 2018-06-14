package com.revature.servlet;

import java.sql.SQLException;

import com.revature.DAOimpl.EmployeesDAOimpl;

public class Service {
	
	private String arr [];
	private EmployeesDAOimpl empDao;
	
	public Service(String arr []) {
		this.arr = arr;
		empDao = new EmployeesDAOimpl(arr);
		
	}
	
	public boolean checkLoginCredentials(String username, String password)
	{
		try {
			empDao.checkLoginCredentials(username, password);
			return true;
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		
		return false;
	}

}
