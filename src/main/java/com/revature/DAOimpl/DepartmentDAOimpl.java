package com.revature.DAOimpl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.revature.DAO.DepartmentDAO;
import com.revature.model.Department;
import com.revature.model.Employees;
import com.revature.util.ConnFactory;

public class DepartmentDAOimpl implements DepartmentDAO
{
	public static ConnFactory cf = ConnFactory.getInstance();
	
	public void insertDepartment(Department department) throws SQLException 
	
	{
		try
		{
		Connection conn = cf.getConnection();
		String sql = "{call INSERTDEPARTMENT(?,?,?)";
		CallableStatement call = conn.prepareCall(sql);
		call.setString(1, department.getDepartmentName());
		call.setInt(2, department.getDepartmentHead_ID());
		call.setInt(3, department.getBenco_ID());
		call.executeQuery();
		}
		
		catch(SQLException e) {}
	}

	public ArrayList<Department> getDepartmentList() throws SQLException 
	
	{
		ArrayList<Department> DepartmentList = new ArrayList<Department>();
		Connection conn = cf.getConnection();
		Statement stmt = (Statement) (conn = cf.getConnection());
		ResultSet rs = stmt.executeQuery("SELECT * FROM DEPARTMENT");
		Department de = null;
		while(rs.next()) 
		{
			de = new Department(rs.getString(1),rs.getInt(2),rs.getInt(3));
			DepartmentList.add(de);
		}
		return null;
	}

	public void deleteDepartment(Department department) throws SQLException 
	
	{
		try
		{
		Connection conn = cf.getConnection();
		Statement stmt = conn.createStatement();
		String sql = "DELETE FROM DEPARTMENT WHERE DEPARTMENT_NAME =" + department.getDepartmentName();
		stmt.executeQuery(sql);
		}
		
		catch(SQLException e) {}
		
	}

	public void updateDepartment(Department department) throws SQLException 
	
	{
		try
		{
		Connection conn = cf.getConnection();
		String sql = "{call UPDATEDEPARTMENT(?,?,?)";
		CallableStatement call = conn.prepareCall(sql);
		call.setString(1, department.getDepartmentName());
		call.setInt(2, department.getDepartmentHead_ID());
		call.setInt(3, department.getBenco_ID());
		call.executeQuery();
		}
		
		catch(SQLException e) {}
		
	}

	
	
}
