package com.revature.servlet;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.revature.DAOimpl.EmployeesDAOimpl;
import com.revature.DAOimpl.ReimbursementsDAOimpl;
import com.revature.model.Reimbursements;

public class Service {
	
	private String arr [];
	private EmployeesDAOimpl empDao;
	private ReimbursementsDAOimpl reimbDao;
	
	public Service(String arr []) {
		this.arr = arr;
		empDao = new EmployeesDAOimpl(arr);
		
	}
	
	public int checkLoginCredentials(String username, String password)
	{	
		int employee_id = -1;
		try {
			employee_id = empDao.checkLoginCredentials(username, password);
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		
		return employee_id;
	}
	
	public void getEmployeeReimbursmentsFromDB(int employee_id) throws SQLException {
		List<Reimbursements> reimbursementList = new ArrayList<Reimbursements>();
		reimbursementList = reimbDao.getEmployeeReimbursements(employee_id);
		
	}

}
