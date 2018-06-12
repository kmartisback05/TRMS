package com.revature.DAOimpl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.revature.DAO.EmployeesDAO;
import com.revature.model.Employees;
import com.revature.util.ConnFactory;

public class EmployeesDAOimpl implements EmployeesDAO

{

	public static ConnFactory cf = ConnFactory.getInstance();
	
	
	public void insertEmployees(Employees employees)
	{
		try {
		Connection conn = cf.getConnection();
		String sql = "{call INSERTEMPLOYEES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
		CallableStatement call = conn.prepareCall(sql);
		call.setInt(1,employees.getEmployee_ID());
		call.setString(2, employees.getfName());
		call.setString(3, employees.getlName());
		call.setString(4, employees.getUserName());
		call.setString(5, employees.getPassword());
		call.setInt(6, employees.getDepartment_ID());
		call.setInt(7, employees.getSupervisor_ID());
		call.setString(8, employees.getAddress() );
		call.setString(9, employees.getCity());
		call.setString(10,employees.getState());
		call.setInt(11,employees.getZipCode());
		call.setString(12, employees.getPhoneNumber());
		call.setString(13, employees.getEmail());
		call.executeQuery();
		}
		catch(SQLException e) {}
		
		
		
	}

	public ArrayList<Employees> getEmployeesList() throws SQLException
	{
		ArrayList<Employees> EmployeesList = new ArrayList<Employees>();
		Connection conn = cf.getConnection();
		Statement stmt = (Statement) (conn = cf.getConnection());
		ResultSet rs = stmt.executeQuery("SELECT * FROM EMPLOYEES");
		Employees em = null;
		while(rs.next()) 
		{
			em = new Employees(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),
			rs.getShort(6),rs.getInt(7),rs.getString(8),rs.getString(9),rs.getString(10),rs.getInt(11),rs.getString(12), rs.getString(13));
			EmployeesList.add(em);
		}
		return EmployeesList;
	}

	public void deleteEmployees(Employees employees) throws SQLException 
	{
		try
		{
		Connection conn = cf.getConnection();
		Statement stmt = conn.createStatement();
		String sql = "DELETE FROM EMPLOYEES WHERE EMPLOYEE_ID =" + employees.getEmployee_ID();
		stmt.executeQuery(sql);
		}
		
		catch(SQLException e) {}
	}

	public void updateEmployees(Employees employees) throws SQLException 
	{
		try
		{
		Connection conn = cf.getConnection();
		String sql = "{call UPDATEEMPLOYEES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
		CallableStatement call = conn.prepareCall(sql);
		call.setInt(1,employees.getEmployee_ID());
		call.setString(2, employees.getfName());
		call.setString(3, employees.getlName());
		call.setString(4, employees.getUserName());
		call.setString(5, employees.getPassword());
		call.setInt(6, employees.getDepartment_ID());
		call.setInt(7, employees.getSupervisor_ID());
		call.setString(8, employees.getAddress() );
		call.setString(9, employees.getCity());
		call.setString(10,employees.getState());
		call.setInt(11,employees.getZipCode());
		call.setString(12, employees.getPhoneNumber());
		call.setString(13, employees.getEmail());
		call.executeQuery();
		}
		catch(SQLException e) {}
		
	}




}
