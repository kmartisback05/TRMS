package com.revature.DAOimpl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.revature.DAO.EmployeesDAO;
import com.revature.model.Employees;
import com.revature.util.ConnFactory;

public class EmployeesDAOimpl implements EmployeesDAO {

	public static ConnFactory cf = ConnFactory.getInstance();
	private String arr [];

	public EmployeesDAOimpl(String arr []) {
		this.arr = arr;
	}

	public List<Employees> getEmployeesBySupervisor(int supervisor_id) throws SQLException {
		List<Employees> employeeList = new ArrayList<Employees>();
		Employees emp = null;
		PreparedStatement ps = null;
		Connection conn = null;
		String[] primaryKeys = new String[1];
		primaryKeys[0] = "EMPLOYEE_ID";
		String sql = "SELECT * FROM EMPLOYEES WHERE SUPERVISOR_ID = ?";
		
		
		try {
			conn = cf.getConnection(arr);
			ps = conn.prepareStatement(sql, primaryKeys);
			ps.setInt(1, supervisor_id);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				int id = rs.getInt("EMPLOYEE_ID");
				String first = rs.getString("FNAME");
				String last = rs.getString("LNAME");
				String user = rs.getString("USERNAME");
				String pass = rs.getString("PASSWORD");
				String dept = rs.getString("DEPARTMENT_NAME");
				int supervisor = rs.getInt("SUPERVISOR_ID");
				String address = rs.getString("ADDRESS");
				String city = rs.getString("CITY");
				String state = rs.getString("STATE");
				int zip = rs.getInt("ZIPCODE");
				String phone = rs.getString("PHONENUMBER");
				String email = rs.getString("EMAIL");
				String is_supervisor = rs.getString("IS_SUPERVISOR");
				String is_dept_head = rs.getString("IS_DEPARTMENT_HEAD");
				String is_benco = rs.getString("IS_BENCO");
				
				emp = new Employees(id, first, last, user, pass, dept, supervisor, address, city, state, zip, phone, email,
					is_supervisor, is_dept_head, is_benco);
				
				employeeList.add(emp);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if(ps != null) {
				ps.close();
			}
			if(conn != null) {
				conn.close();
			}
		}
		System.out.println("Successfully got employees by supervisor!");
		return employeeList;
	}

	public List<Employees> getEmployeesByDepartment(String department_name) throws SQLException {
		List<Employees> employeeList = new ArrayList<Employees>();
		Employees emp = null;
		PreparedStatement ps = null;
		Connection conn = null;
		String[] primaryKeys = new String[1];
		primaryKeys[0] = "EMPLOYEE_ID";
		String sql = "SELECT * FROM EMPLOYEES WHERE DEPARTMENT_NAME = ?";
		
		
		try {
			conn = cf.getConnection(arr);
			ps = conn.prepareStatement(sql, primaryKeys);
			ps.setString(1, department_name);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				int id = rs.getInt("EMPLOYEE_ID");
				String first = rs.getString("FNAME");
				String last = rs.getString("LNAME");
				String user = rs.getString("USERNAME");
				String pass = rs.getString("PASSWORD");
				String dept = rs.getString("DEPARTMENT_NAME");
				int supervisor = rs.getInt("SUPERVISOR_ID");
				String address = rs.getString("ADDRESS");
				String city = rs.getString("CITY");
				String state = rs.getString("STATE");
				int zip = rs.getInt("ZIPCODE");
				String phone = rs.getString("PHONENUMBER");
				String email = rs.getString("EMAIL");
				String is_supervisor = rs.getString("IS_SUPERVISOR");
				String is_dept_head = rs.getString("IS_DEPARTMENT_HEAD");
				String is_benco = rs.getString("IS_BENCO");
				
				emp = new Employees(id, first, last, user, pass, dept, supervisor, address, city, state, zip, phone, email,
					is_supervisor, is_dept_head, is_benco);
				
				employeeList.add(emp);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if(ps != null) {
				ps.close();
			}
			if(conn != null) {
				conn.close();
			}
		}
		System.out.println("Successfully got employees by department!");
		return employeeList;
	}

	public Employees getEmployeeById(int employee_id) throws SQLException {
		Employees emp = null;
		PreparedStatement ps = null;
		Connection conn = null;
		String[] primaryKeys = new String[1];
		primaryKeys[0] = "EMPLOYEE_ID";
		String sql = "SELECT * FROM EMPLOYEES WHERE EMPLOYEE_ID = ?";
		
		
		try {
			conn = cf.getConnection(arr);
			ps = conn.prepareStatement(sql, primaryKeys);
			ps.setInt(1, employee_id);
		
			ResultSet rs = ps.executeQuery();
			rs.next();
			int id = rs.getInt("EMPLOYEE_ID");
			String first = rs.getString("FNAME");
			String last = rs.getString("LNAME");
			String user = rs.getString("USERNAME");
			String pass = rs.getString("PASSWORD");
			String dept = rs.getString("DEPARTMENT_NAME");
			int supervisor = rs.getInt("SUPERVISOR_ID");
			String address = rs.getString("ADDRESS");
			String city = rs.getString("CITY");
			String state = rs.getString("STATE");
			int zip = rs.getInt("ZIPCODE");
			String phone = rs.getString("PHONENUMBER");
			String email = rs.getString("EMAIL");
			String is_supervisor = rs.getString("IS_SUPERVISOR");
			String is_dept_head = rs.getString("IS_DEPARTMENT_HEAD");
			String is_benco = rs.getString("IS_BENCO");
			emp = new Employees(id, first, last, user, pass, dept, supervisor, address, city, state, zip, phone, email,
					is_supervisor, is_dept_head, is_benco);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if(ps != null) {
				ps.close();
			}
			if(conn != null) {
				conn.close();
			}
		}
		System.out.println("Successfully got employee by id!");
		return emp;
	}

	public boolean checkLoginCredentials(String username, String password) throws SQLException {
		
		Connection conn = cf.getConnection(arr);
		System.out.println(conn.toString());
		String sql = "SELECT PASSWORD FROM EMPLOYEES WHERE USERNAME = ?";
		ResultSet rs = null;
		String pass = null;
		
		
		PreparedStatement ps = conn.prepareStatement(sql);
		ps.setString(1, username);
		rs  = ps.executeQuery();
		
		if(rs.next())
		{
			pass = rs.getString("PASSWORD");
		}
		
		if(pass.equals(password))
		{
			return true;
		}

		return false;
	/*	Employees emp = null;
		PreparedStatement ps = null;
		Connection conn = null;
		boolean valid = false;
		//String[] primaryKeys = new String[1];
		//primaryKeys[0] = "EMPLOYEE_ID";
		String sql = "SELECT * FROM EMPLOYEES WHERE USERNAME = ?";
		
		
		try {
			System.out.println("in try");
			conn = cf.getConnection(arr);
			ps = conn.prepareStatement(sql);
			ps.setString(1, username);
		
			ResultSet rs = ps.executeQuery();
			if(rs.next() != false) {
				System.out.println("in rs");
				String pass = rs.getString("PASSWORD");
				if(pass.equals(password)) {
					valid = true;
				}
			}*/
			
			
			/*int id = rs.getInt("EMPLOYEE_ID");
			String first = rs.getString("FNAME");
			String last = rs.getString("LNAME");
			String user = rs.getString("USERNAME");
			String pass = rs.getString("PASSWORD");
			String dept = rs.getString("DEPARTMENT_NAME");
			int supervisor = rs.getInt("SUPERVISOR_ID");
			String address = rs.getString("ADDRESS");
			String city = rs.getString("CITY");
			String state = rs.getString("STATE");
			int zip = rs.getInt("ZIPCODE");
			String phone = rs.getString("PHONENUMBER");
			String email = rs.getString("EMAIL");
			String is_supervisor = rs.getString("IS_SUPERVISOR");
			String is_dept_head = rs.getString("IS_DEPARTMENT_HEAD");
			String is_benco = rs.getString("IS_BENCO");
			emp = new Employees(id, first, last, user, pass, dept, supervisor, address, city, state, zip, phone, email,
					is_supervisor, is_dept_head, is_benco);*/
		
		/*} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if(ps != null) {
				ps.close();
			}
			if(conn != null) {
				conn.close();
			}
		}
		return valid;*/
	}
}
