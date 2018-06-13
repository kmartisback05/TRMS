package com.revature.DAOimpl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.revature.DAO.ReimbursementsDAO;
import com.revature.model.Employees;
import com.revature.model.Reimbursements;
import com.revature.util.ConnFactory;

public class ReimbursementsDAOimpl implements ReimbursementsDAO {
				
		public static ConnFactory cf = ConnFactory.getInstance();
	
	
	public void insertReimbursements(Reimbursements reimbursements) throws SQLException 
	
	{
		try
		{
		Connection conn = cf.getConnection();
		String sql = "{call INTO_REIMBURSMENT(?,?,?,?,?,?,?,?,?,?,?,?,?)";
		CallableStatement call = conn.prepareCall(sql);
		
		call.setInt(1,reimbursements.getEmployee_ID());
		call.setString(2, reimbursements.getReimbursmentTypeName());
		call.setDouble(3, reimbursements.getReimbursmentAmmount());
		call.setString(4, reimbursements.getApprovalStep());
		call.setString(5, reimbursements.getStatus());
		call.setString(6, reimbursements.getGradeSubmitted());
		call.setString(7, reimbursements.getPreapproved());
		call.setDate(8,(Date) reimbursements.getEventStartDate());
		call.setDate(9,(Date) reimbursements.getEventEndDate());
		call.setString(10, reimbursements.getLocation());
		call.setString(11, reimbursements.getJustification());
		call.setString(12, reimbursements.getDescription());
		call.setInt(13, reimbursements.getMissedWork());
		call.executeQuery();
		System.out.println("Successfully inserted reimbursement!");
		}
		
		catch(SQLException e) {}
		
	}

	public void deleteReimbursements(Reimbursements reimbursements) throws SQLException 
	
	{
		try
		{
		Connection conn = cf.getConnection();
		Statement stmt = conn.createStatement();
		String sql = "DELETE FROM REIMBURSMENTS WHERE REIMBURSMENT_ID =" + reimbursements.getReimbursment_ID();
		stmt.executeQuery(sql);
		}
		
		catch(SQLException e) {}
	}

	public void updateReimbursements(Reimbursements reimbursements) throws SQLException 
	
	{
		try
		{
		Connection conn = cf.getConnection();
		String sql = "{call EMPLOYEE_UPDATE_REIMBURSMENTS(?,?,?,?,?,?,?)";
		CallableStatement call = conn.prepareCall(sql);
		call.setInt(1,reimbursements.getReimbursment_ID());
		call.setDate(2,(Date) reimbursements.getEventStartDate());
		call.setDate(3,(Date) reimbursements.getEventEndDate());
		call.setString(4, reimbursements.getLocation());
		call.setString(5, reimbursements.getJustification());
		call.setString(6, reimbursements.getDescription());
		call.setInt(7, reimbursements.getMissedWork());
		call.executeQuery();
		}
		
		catch(SQLException e) {}
		
	}

	public List<Reimbursements> getEmployeeReimbursements(int employee_id) throws SQLException {
		ArrayList<Reimbursements> reimbursementList = new ArrayList<Reimbursements>();
		String[] primaryKeys = new String[1];
		primaryKeys[0] = "REIMBURSMENT_ID";
		Connection conn = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Reimbursements reimbursement = null;
		String sql = "SELECT * FROM REIMBURSMENT WHERE EMPLOYEE_ID = ?";
		
		try {
			conn = cf.getConnection();
			ps = conn.prepareStatement(sql, primaryKeys);
			ps.setInt(1, employee_id);
			rs = ps.executeQuery();
			
			while(rs.next()) {
				int reimbursementID = rs.getInt("REIMBURSMENT_ID");
				int employeeID = rs.getInt("EMPLOYEE_ID");
				String typeName = rs.getString("REIMBURSMENT_TYPE_NAME");
				double ammount = rs.getDouble("REIMBURSMENT_AMOUNT");
				String approvalStep = rs.getString("APPROVAL_STEP");
				String status = rs.getString("STATUS");
				String grade = rs.getString("GRADE_SUBMITTED");
				String preapproved = rs.getString("PREAPPROVED");
				Date startDate = rs.getDate("EVENT_START_DATE");
				Date endDate = rs.getDate("EVENT_END_DATE");
				String location = rs.getString("EVENT_LOCATION");
				String justification = rs.getString("JUSTIFICATION");
				String description = rs.getString("DESCRIPTION");
				int missedWork = rs.getInt("MISSED_WORK");
				
				reimbursement = new Reimbursements(reimbursementID, employeeID, typeName, ammount, approvalStep,
					status, grade, preapproved, startDate, endDate, location, justification, description, missedWork);
					reimbursementList.add(reimbursement);
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
		System.out.println("Successfully got employee reimbursements by ID!");
		return reimbursementList;
	}

	public List<Reimbursements> getSupervisorReimbursements(int supervisor_id) throws SQLException {
		List<Employees> employeeList = new ArrayList<Employees>();
		EmployeesDAOimpl empDao = new EmployeesDAOimpl();
		employeeList = empDao.getEmployeesBySupervisor(supervisor_id);
		
		ArrayList<Reimbursements> reimbursementList = new ArrayList<Reimbursements>();
		String[] primaryKeys = new String[1];
		primaryKeys[0] = "REIMBURSMENT_ID";
		Connection conn = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Reimbursements reimbursement = null;
		String sql = "SELECT * FROM REIMBURSMENT WHERE EMPLOYEE_ID = ? AND APPROVAL_STEP = ?";
		
		try {
			conn = cf.getConnection();
			ps = conn.prepareStatement(sql, primaryKeys);
			
			for(int i=0; i<employeeList.size(); i++) {
			Employees e1 = employeeList.get(i);
			int employee_id = e1.getEmployee_ID();
			
			ps.setInt(1, employee_id);
			ps.setString(2, "Supervisor");
			rs = ps.executeQuery();
			
			while(rs.next()) {
				int reimbursementID = rs.getInt("REIMBURSMENT_ID");
				int employeeID = rs.getInt("EMPLOYEE_ID");
				String typeName = rs.getString("REIMBURSMENT_TYPE_NAME");
				double ammount = rs.getDouble("REIMBURSMENT_AMOUNT");
				String approvalStep = rs.getString("APPROVAL_STEP");
				String status = rs.getString("STATUS");
				String grade = rs.getString("GRADE_SUBMITTED");
				String preapproved = rs.getString("PREAPPROVED");
				Date startDate = rs.getDate("EVENT_START_DATE");
				Date endDate = rs.getDate("EVENT_END_DATE");
				String location = rs.getString("EVENT_LOCATION");
				String justification = rs.getString("JUSTIFICATION");
				String description = rs.getString("DESCRIPTION");
				int missedWork = rs.getInt("MISSED_WORK");
				
				reimbursement = new Reimbursements(reimbursementID, employeeID, typeName, ammount, approvalStep,
					status, grade, preapproved, startDate, endDate, location, justification, description, missedWork);
				
				reimbursementList.add(reimbursement);	
			}
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
		System.out.println("Successfully got employee reimbursements by supervisor!");
		return reimbursementList;
	}

	public List<Reimbursements> getDepartmentHeadReimbursements(int dept_head_id) throws SQLException {
		List<Employees> employeeList = new ArrayList<Employees>();
		EmployeesDAOimpl empDao = new EmployeesDAOimpl();
		Employees e1 = empDao.getEmployeeById(dept_head_id);
		String deptName = e1.getDepartmentName();
		employeeList = empDao.getEmployeesByDepartment(deptName);
		
		ArrayList<Reimbursements> reimbursementList = new ArrayList<Reimbursements>();
		String[] primaryKeys = new String[1];
		primaryKeys[0] = "REIMBURSMENT_ID";
		Connection conn = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Reimbursements reimbursement = null;
		String sql = "SELECT * FROM REIMBURSMENT WHERE EMPLOYEE_ID = ? AND APPROVAL_STEP = ?";
		
		
		try {
			conn = cf.getConnection();
			ps = conn.prepareStatement(sql, primaryKeys);
			
			for(int i=0; i<employeeList.size(); i++) {
			Employees e2 = employeeList.get(i);
			int employee_id = e2.getEmployee_ID();
			
			ps.setInt(1, employee_id);
			ps.setString(2, "Department Head");
			rs = ps.executeQuery();
			
			while(rs.next()) {
				int reimbursementID = rs.getInt("REIMBURSMENT_ID");
				int employeeID = rs.getInt("EMPLOYEE_ID");
				String typeName = rs.getString("REIMBURSMENT_TYPE_NAME");
				double ammount = rs.getDouble("REIMBURSMENT_AMOUNT");
				String approvalStep = rs.getString("APPROVAL_STEP");
				String status = rs.getString("STATUS");
				String grade = rs.getString("GRADE_SUBMITTED");
				String preapproved = rs.getString("PREAPPROVED");
				Date startDate = rs.getDate("EVENT_START_DATE");
				Date endDate = rs.getDate("EVENT_END_DATE");
				String location = rs.getString("EVENT_LOCATION");
				String justification = rs.getString("JUSTIFICATION");
				String description = rs.getString("DESCRIPTION");
				int missedWork = rs.getInt("MISSED_WORK");
				
				reimbursement = new Reimbursements(reimbursementID, employeeID, typeName, ammount, approvalStep,
					status, grade, preapproved, startDate, endDate, location, justification, description, missedWork);
				
				reimbursementList.add(reimbursement);	
			}
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
		System.out.println("Successfully got employee reimbursements by department!");
		return reimbursementList;
	}

	public Reimbursements getReimbursementsById(int reimbursement_id) throws SQLException {
		Reimbursements reimb = null;
		PreparedStatement ps = null;
		Connection conn = null;
		String[] primaryKeys = new String[1];
		primaryKeys[0] = "REIMBURSMENT_ID";
		String sql = "SELECT * FROM REIMBURSMENT WHERE REIMBURSMENT_ID = ?";
		
		
		try {
			conn = cf.getConnection();
			ps = conn.prepareStatement(sql, primaryKeys);
			ps.setInt(1, reimbursement_id);
		
			ResultSet rs = ps.executeQuery();
			rs.next();
			int reimbursementID = rs.getInt("REIMBURSMENT_ID");
			int employeeID = rs.getInt("EMPLOYEE_ID");
			String typeName = rs.getString("REIMBURSMENT_TYPE_NAME");
			double ammount = rs.getDouble("REIMBURSMENT_AMOUNT");
			String approvalStep = rs.getString("APPROVAL_STEP");
			String status = rs.getString("STATUS");
			String grade = rs.getString("GRADE_SUBMITTED");
			String preapproved = rs.getString("PREAPPROVED");
			Date startDate = rs.getDate("EVENT_START_DATE");
			Date endDate = rs.getDate("EVENT_END_DATE");
			String location = rs.getString("EVENT_LOCATION");
			String justification = rs.getString("JUSTIFICATION");
			String description = rs.getString("DESCRIPTION");
			int missedWork = rs.getInt("MISSED_WORK");
			
			reimb = new Reimbursements(reimbursementID, employeeID, typeName, ammount, approvalStep,
				status, grade, preapproved, startDate, endDate, location, justification, description, missedWork);
			
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
		System.out.println("Successfully got reimbursement by id!");
		return reimb;
	}

	public List<Reimbursements> getBencoReimbursements() throws SQLException {
		ArrayList<Reimbursements> reimbursementList = new ArrayList<Reimbursements>();
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		Reimbursements reimbursement = null;
		
		
		try {
			conn = cf.getConnection();
			stmt = conn.createStatement();
			rs = stmt.executeQuery("SELECT * FROM REIMBURSMENT");
			
			while(rs.next()) {
				int reimbursementID = rs.getInt("REIMBURSMENT_ID");
				int employeeID = rs.getInt("EMPLOYEE_ID");
				String typeName = rs.getString("REIMBURSMENT_TYPE_NAME");
				double ammount = rs.getDouble("REIMBURSMENT_AMOUNT");
				String approvalStep = rs.getString("APPROVAL_STEP");
				String status = rs.getString("STATUS");
				String grade = rs.getString("GRADE_SUBMITTED");
				String preapproved = rs.getString("PREAPPROVED");
				Date startDate = rs.getDate("EVENT_START_DATE");
				Date endDate = rs.getDate("EVENT_END_DATE");
				String location = rs.getString("EVENT_LOCATION");
				String justification = rs.getString("JUSTIFICATION");
				String description = rs.getString("DESCRIPTION");
				int missedWork = rs.getInt("MISSED_WORK");
				
				//check value of approval step to see if benco approval is pending
				if(approvalStep == "Benefits Coordinator") {
					reimbursement = new Reimbursements(reimbursementID, employeeID, typeName, ammount, approvalStep,
							status, grade, preapproved, startDate, endDate, location, justification, description, missedWork);
					reimbursementList.add(reimbursement);
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if(stmt != null) {
				stmt.close();
			}
			if(conn != null) {
				conn.close();
			}
		}
		System.out.println("Successfully got all reimbursements for benefits coordinator!");
		return reimbursementList;
	}

	public void updateApprovalStep(Reimbursements reimbursement) throws SQLException {
		String approvalStep = reimbursement.getApprovalStep();
		int employeeId = reimbursement.getEmployee_ID();
		EmployeesDAOimpl empDao = new EmployeesDAOimpl();
		Employees e1 = empDao.getEmployeeById(employeeId);
		int supervisorId = e1.getSupervisor_ID();
		Employees e2 = empDao.getEmployeeById(supervisorId);
		String isDeptHead = e2.getIsDepartmentHead();
		
		if(approvalStep.equals("Supervisor")) {
			if(isDeptHead.equals("yes")) {
				reimbursement.setApprovalStep("Benefits Coordinator");
			} else {
				reimbursement.setApprovalStep("Department Head");
			}
		} else if(approvalStep.equals("Department Head")) {
			reimbursement.setApprovalStep("Benefits Coordinator");
		} else if(approvalStep.equals("Benefits Coordinator")) {
			reimbursement.setApprovalStep("");
		}
		
		Connection conn = cf.getConnection();
		String sql = "{call UPDATE_STEP(?,?)";
		CallableStatement call = conn.prepareCall(sql);
		call.setInt(1, reimbursement.getReimbursment_ID());
		call.setString(2, reimbursement.getApprovalStep());
		call.executeQuery();
		
	}

	public void updateStatus(Reimbursements reimbursement) throws SQLException {
		String status = reimbursement.getStatus();
		/*if(status == "Waiting") {
			reimbursement.setStatus("Pending");
		} else if("")*/
		
	}

	public void updateAmount(Reimbursements reimbursement, double amount) throws SQLException {
		Connection conn = cf.getConnection();
		String sql = "{call UPDATE_REIMBURSMENT_AMOUNT(?,?)";
		CallableStatement call = conn.prepareCall(sql);
		call.setInt(1, reimbursement.getReimbursment_ID());
		call.setDouble(2, amount);
		call.executeQuery();
	}
	
	public double getAvailableAmount(int employee_id) throws SQLException {
		List<Reimbursements> reimbursementList = new ArrayList<Reimbursements>();
		reimbursementList = getEmployeeReimbursements(employee_id);
		double amount = 0.0;
		for(int i=0; i<reimbursementList.size(); i++) {
			amount += reimbursementList.get(i).getReimbursmentAmmount();
		}
		return (1000.00 - amount);
	}

}
