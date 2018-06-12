package com.revature.DAO;

import java.sql.SQLException;
import java.util.ArrayList;

import com.revature.model.Employees;


public interface EmployeesDAO 
{
	public abstract void insertEmployees(Employees employees)throws SQLException;
	
	public abstract ArrayList<Employees> getEmployeesList() throws SQLException;
	
	public abstract void deleteEmployees(Employees employees) throws SQLException;
	
	public abstract void updateEmployees(Employees employees) throws SQLException;
	


}
