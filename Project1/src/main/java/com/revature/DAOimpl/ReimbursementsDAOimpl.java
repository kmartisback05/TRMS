package com.revature.DAOimpl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

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
		String sql = "{call INSERTREIMBURSEMENTS(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		CallableStatement call = conn.prepareCall(sql);
		call.setInt(1,reimbursements.getReimbursment_ID());
		call.setInt(2,reimbursements.getEmployee_ID());
		call.setString(3,reimbursements.getReimbursment_Type_Name());
		call.setDouble(4,reimbursements.getReimbursment_Amount());
		call.setInt(5, reimbursements.getApproval_Step());
		call.setString(6, reimbursements.getStatus());
		call.setString(7, reimbursements.getSubmitted());
		call.setString(8, reimbursements.getPreapproved());
		call.setDate(9,(Date) reimbursements.getEvent_Start_Date());
		call.setDate(10,(Date) reimbursements.getEvent_End_Date());
		call.setString(11,reimbursements.getLocation());
		call.setString(12,reimbursements.getJustification());
		call.setInt(13,reimbursements.getMissed_Work());
		call.setInt(14,reimbursements.getFile_ID());
		call.executeQuery();
		}
		
		catch(SQLException e) {}
		
	}

	public ArrayList<Reimbursements> getReimbursementsList() throws SQLException 
	
	{
		ArrayList<Reimbursements> ReimbursementsList = new ArrayList<Reimbursements>();
		Connection conn = cf.getConnection();
		Statement stmt = (Statement) (conn = cf.getConnection());
		ResultSet rs = stmt.executeQuery("SELECT * FROM REIMBURSEMENTS");
		Reimbursements re = null;
		while(rs.next()) 
		{
			re = new Reimbursements(rs.getInt(1),rs.getInt(2),rs.getString(3),rs.getDouble(4),rs.getInt(5),rs.getString(6),rs.getString(7), 
			rs.getString(8),rs.getDate(9),rs.getDate(10),rs.getString(11),rs.getString(12),rs.getInt(13),rs.getInt(14));
			ReimbursementsList.add(re);
		}
		
		return ReimbursementsList;
	}

	public void deleteReimbursements(Reimbursements reimbursements) throws SQLException 
	
	{
		try
		{
		Connection conn = cf.getConnection();
		Statement stmt = conn.createStatement();
		String sql = "DELETE FROM REIMBURSEMENTS WHERE REIMBURSEMENT_ID =" + reimbursements.getReimbursment_ID();
		stmt.executeQuery(sql);
		}
		
		catch(SQLException e) {}
	}

	public void updateReimbursements(Reimbursements reimbursements) throws SQLException 
	
	{
		try
		{
		Connection conn = cf.getConnection();
		String sql = "{call UPDATEREIMBURSEMENTS(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		CallableStatement call = conn.prepareCall(sql);
		call.setInt(1,reimbursements.getReimbursment_ID());
		call.setInt(2,reimbursements.getEmployee_ID());
		call.setString(3,reimbursements.getReimbursment_Type_Name());
		call.setDouble(4,reimbursements.getReimbursment_Amount());
		call.setInt(5, reimbursements.getApproval_Step());
		call.setString(6, reimbursements.getStatus());
		call.setString(7, reimbursements.getSubmitted());
		call.setString(8, reimbursements.getPreapproved());
		call.setDate(9,(Date) reimbursements.getEvent_Start_Date());
		call.setDate(10,(Date) reimbursements.getEvent_End_Date());
		call.setString(11,reimbursements.getLocation());
		call.setString(12,reimbursements.getJustification());
		call.setInt(13,reimbursements.getMissed_Work());
		call.setInt(14,reimbursements.getFile_ID());
		call.executeQuery();
		}
		
		catch(SQLException e) {}
		
	}

}
