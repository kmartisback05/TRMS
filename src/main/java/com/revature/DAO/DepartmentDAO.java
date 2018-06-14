package com.revature.DAO;

import java.sql.SQLException;
import java.util.ArrayList;

import com.revature.model.Department;



public interface DepartmentDAO 
{

	public abstract void insertDepartment (Department department )throws SQLException;
	
	public abstract ArrayList<Department > getDepartmentList() throws SQLException;
	
	public abstract void deleteDepartment (Department  department) throws SQLException;
	
	public abstract void updateDepartment (Department  department) throws SQLException;
	
	
}
