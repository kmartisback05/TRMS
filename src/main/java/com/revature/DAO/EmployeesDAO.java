package com.revature.DAO;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.revature.model.Employees;


public interface EmployeesDAO 
{
	public abstract Employees getEmployeeById(int employee_id) throws SQLException;
	
	public abstract List<Employees> getEmployeesBySupervisor(int supervisor_id) throws SQLException;
	
	public abstract List<Employees> getEmployeesByDepartment(String department_name) throws SQLException;
	
}
